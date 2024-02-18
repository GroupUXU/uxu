import {PhoneFull, PhoneNetworkPL} from 'utils';
import type {CommentRelationResponseCollection, GetPhoneQuery} from '../../../gql';
import {adapterImageData} from "../adapterImageData";
import {adapterTagData} from "../adapterTagData";
import {adapterCommentsData} from "./utils";
import {formatPhoneNumberPL} from 'utils';
import {setReputation} from '../../function';

export function adapterPhoneData(getPhoneData?: GetPhoneQuery): PhoneFull {
		
		if (!getPhoneData?.phone?.data) return {
				id: "",
				phone: "",
				typ: "",
				lead: null,
				network: null,
				reputation: null,
				updatedAt: null,
				createdAt: null,
				cover: null,
				tags: [],
				contentparts: [],
				comments: null,
		};
		
		const {id, attributes} = getPhoneData.phone.data;
		return {
				id: id ?? '',
				phone: formatPhoneNumberPL(attributes?.phone) || "",
				typ: attributes?.typ || "mobile",
				lead: attributes?.lead.lead || "",
				network: attributes?.network as PhoneNetworkPL | undefined || "unknown" as PhoneNetworkPL,
				reputation: setReputation(attributes?.ratings as Record<string, number>),
				updatedAt: attributes?.updatedAt as string || null,
				createdAt: attributes?.createdAt as string || null,
				cover: adapterImageData({image: attributes?.cover.data?.attributes, typeImg: 'medium'}),
				tags: attributes?.tags?.data.map(adapterTagData) ?? [],
				contentparts: [
						{
								type: 10,
								id: "1",
								columns: [
										{id: "info", value: "Info."},
										{id: "status", value: "Status"}
								],
								data: [
										{"info": {id: "reputation", value: "Reputacja numeru:"}, "status": {id: "reputationValue", value: 'Negatywna'}},
										{"info": {id: "searches", value: "Liczba wyszukań:"}, "status": {id: "searchesValue", value: "78"}},
										{"info": {id: "comments", value: "Liczba komentarzy:"}, "status": {id: "commentsValue", value: "12"}},
										{"info": {id: "lastChecked", value: "Ostatnio sprawdzany:"}, "status": {id: "lastCheckedValue", value: "kilka sekund temu"}},
										{"info": {id: "network", value: "Sieć:"}, "status": {id: "networkValue", value: "Play"}}
								]
						}
				],
				comments: attributes?.comments ? {data: adapterCommentsData(attributes.comments as CommentRelationResponseCollection), pagination: {page: 1, pageSize: 12, pageCount: 1, total: 12}} : null
		};
};
