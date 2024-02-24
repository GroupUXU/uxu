import {type PhoneFull, type Status, parseFormatDate, formatPhoneNumberPL, PhoneNetworkPL, Image} from 'utils';
import type {CommentEntityResponseCollection, GetPhoneQuery, GetCommentsQuery, ComponentOthersCover} from '../../../gql';
import {adapterImageData} from "../adapterImageData";
import {adapterCommentsData} from "./utils";
import {setReputationFromReputations} from '../../function';

export function adapterPhoneData(getPhoneData?: GetPhoneQuery, getCommentsData?: GetCommentsQuery): PhoneFull {
		if (!getPhoneData?.phone?.data) {
				return {
						comments: null,
						contentParts: [],
						cover: null,
						createdAt: null,
						format: [],
						gallery: {
								danger: null,
								default: null,
								error: null,
								success: null,
								warning: null,
						},
						id: null,
						lead: null,
						network: null,
						phone: null,
						reputation: null,
						typ: null,
						updatedAt: null,
						views: []
				};
		}
		
		const adapterViews = (viewsArray?: Array<{ __typename: string, id: string, views: number, date: string }>) => {
				return {
						data: viewsArray?.map(({id, views, date}) => ({id, views, date})) ?? [],
						count: viewsArray?.reduce((acc, {views}) => acc + views, 0) ?? 0,
				};
		};
		
		
		const {id, attributes} = getPhoneData.phone.data;
		const reputation = setReputationFromReputations(attributes?.ratings as Record<string, unknown> | null);
		const network = attributes?.network as PhoneNetworkPL | null;
		const comments = getCommentsData?.comments
		const commentsTotal = comments?.meta.pagination.total || 0;
		const viewsData = adapterViews(attributes?.views as Array<{ __typename: string, id: string, views: number, date: string }>);

		const gallery: Record<Status, Image> = {
				danger: null,
				default: null,
				error: null,
				success: null,
				warning: null,
		}
		
		attributes?.gallery.map((image: ComponentOthersCover) => {
				image.typ as Status && (gallery[image.typ] = adapterImageData({image: image.cover?.data?.attributes, typeImg: 'medium'}))
		});
		
		return {
				comments: comments ? {data: adapterCommentsData(comments as CommentEntityResponseCollection), pagination: {page: 1, pageSize: 12, pageCount: 1, total: 12}} : null,
				contentParts: [
						{
								type: 10,
								id: "1",
								columns: [
										{id: "info", value: "Info."},
										{id: "status", value: "Status"}
								],
								data: [
										{"info": {id: "reputation", value: "Reputacja numeru:"}, "status": {id: "reputationValue", value: reputation}},
										{"info": {id: "searches", value: "Liczba wyszukań:"}, "status": {id: "searchesValue", value: viewsData.count}},
										{"info": {id: "comments", value: "Liczba komentarzy:"}, "status": {id: "commentsValue", value: commentsTotal}},
										{"info": {id: "lastChecked", value: "Ostatnio sprawdzany:"}, "status": {id: "lastCheckedValue", value: parseFormatDate(attributes?.updatedAt as string)}},
										{"info": {id: "network", value: "Sieć:"}, "status": {id: "networkValue", value: network}}
								]
						}
				],
				cover: null,
				id: id ?? '',
				phone: formatPhoneNumberPL(attributes?.phone) ?? "",
				typ: attributes?.typ ?? "mobile",
				lead: attributes?.lead.lead ?? "",
				network,
				reputation,
				updatedAt: attributes?.updatedAt as string || null,
				createdAt: attributes?.createdAt as string || null,
				cover: gallery[reputation],
				gallery: gallery,
				format: attributes?.format.map((formatPhone) => ({id: formatPhone.id, title: formatPhone.format})),
		};
}
