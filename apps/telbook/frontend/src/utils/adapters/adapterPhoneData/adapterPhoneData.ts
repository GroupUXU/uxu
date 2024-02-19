import {type PhoneFull, setReputation, setReputationPL, parseFormatDate, formatPhoneNumberPL, type InfoTyp, PhoneNetworkPL, ReputationTyp} from 'utils';
import type { CommentRelationResponseCollection, GetPhoneQuery, GetCommentsQuery } from '../../../gql';
import { adapterImageData } from "../adapterImageData";
import { adapterTagData } from "../adapterTagData";
import { adapterCommentsData } from "./utils";
import {setReputationFromReputations} from '../../function';

export function adapterPhoneData(getPhoneData?: GetPhoneQuery, getCommentsData?: GetCommentsQuery): PhoneFull {
		if (!getPhoneData?.phone?.data) {
				return {
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
		}
		
		const adapterViews = (viewsArray?: Array<{ __typename: string, id: string, views: number, date: string }>) => {
				return {
						data: viewsArray?.map(({ id, views, date }) => ({ id, views, date })) ?? [],
						count: viewsArray?.reduce((acc, { views }) => acc + views, 0) ?? 0,
				};
		};
		
		
		
		const { id, attributes } = getPhoneData.phone.data;
		const reputation = setReputation(setReputationFromReputations(attributes?.ratings as Record<string, unknown> | null)) as ReputationTyp;
		const network = attributes?.network as PhoneNetworkPL | null;
		const commentsTotal = getCommentsData?.comments?.meta.pagination.total || 0;
		const viewsData = adapterViews(attributes?.views as Array<{ __typename: string, id: string, views: number, date: string }>);
		
		return {
				id: id ?? '',
				phone: formatPhoneNumberPL(attributes?.phone) ?? "",
				typ: attributes?.typ ?? "mobile",
				lead: attributes?.lead.lead ?? "",
				network,
				reputation,
				updatedAt: attributes?.updatedAt as string || null,
				createdAt: attributes?.createdAt as string || null,
				cover: adapterImageData({ image: attributes?.cover.data?.attributes, typeImg: 'medium' }),
				tags: attributes?.tags?.data.map(adapterTagData) ?? [],
				contentparts: [
						{
								type: 10,
								id: "1",
								columns: [
										{ id: "info", value: "Info." },
										{ id: "status", value: "Status" }
								],
								data: [
										{ "info": { id: "reputation", value: "Reputacja numeru:" }, "status": { id: "reputationValue", value: setReputationPL(reputation) } },
										{ "info": { id: "searches", value: "Liczba wyszukań:" }, "status": { id: "searchesValue", value: viewsData.count } },
										{ "info": { id: "comments", value: "Liczba komentarzy:" }, "status": { id: "commentsValue", value: commentsTotal } },
										{ "info": { id: "lastChecked", value: "Ostatnio sprawdzany:" }, "status": { id: "lastCheckedValue", value: parseFormatDate(attributes?.updatedAt as string) } },
										{ "info": { id: "network", value: "Sieć:" }, "status": { id: "networkValue", value: network } }
								]
						}
				],
				comments: attributes?.comments ? { data: adapterCommentsData(attributes.comments as CommentRelationResponseCollection), pagination: { page: 1, pageSize: 12, pageCount: 1, total: 12 } } : null
		};
}
