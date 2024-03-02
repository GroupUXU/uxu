import {type PhoneFull, type Status, parseFormatDate, Image, statusMapToPL} from 'utils';
import type {
    GetPhoneQuery,
    GetCommentsQuery,
    ComponentOthersCover,
    ComponentStatsViews,
    ComponentOthersFormat
} from '../../../gql';
import {adapterImageData} from '../adapterImageData';
import {setReputationFromReputations} from '../../function';

type ViewsData = {
    data: Array<{ y: number; x: string }>;
    count: number;
};

function adapterViews(viewsArray?: Array<ComponentStatsViews>): ViewsData {
    return viewsArray?.reduce<ViewsData>(
        (acc, {views, date}) => {
            acc.data.push({y: views, x: date as string || ''});
            acc.count += views;
            return acc;
        },
        {data: [], count: 0}
    ) ?? {data: [], count: 0};
}


function adapterGallery(gallery?: Array<ComponentOthersCover>): Record<Status, Image | null> {
    const result: Record<Status, Image | null> = {
        danger: null,
        default: null,
        error: null,
        success: null,
        warning: null
    };
    gallery?.forEach((image) => {
        if (image.typ) {
            result[image.typ] = adapterImageData({
                image: image.cover?.data?.attributes,
                typeImg: 'medium',
            });
        }
    });
    return result;
}

export function adapterPhoneData(getPhoneData?: GetPhoneQuery, getCommentsData?: GetCommentsQuery): PhoneFull {
    if (!getPhoneData?.phone?.data) {
        return {
            contentParts: [],
            cover: null,
            createdAt: null,
            format: [],
            id: null,
            lead: null,
            phone: null,
            status: null,
            typ: null,
            updatedAt: null
        };
    }

    const {id, attributes} = getPhoneData.phone.data;
    const ratings: Record<Status, number> | null = attributes?.ratings as Record<Status, number> | null || null;
    const status: Status | null = setReputationFromReputations(ratings);
    const viewsData: ViewsData = adapterViews(attributes?.views as Array<ComponentStatsViews>);
    const gallery: Record<Status, Image | null> = adapterGallery(attributes?.gallery as Array<ComponentOthersCover>);
    const comments = getCommentsData?.comments
    const commentsTotal: number = comments?.meta.pagination.total || 0;

    return {
        contentParts: [
            {
                type: 10,
                id: "1",
                columns: [
                    {id: "info", value: "Info."},
                    {id: "status", value: "Status"}
                ],
                data: [
                    {
                        "info": {id: "reputation", value: "Reputacja numeru:"},
                        "status": {id: "reputationValue", value: statusMapToPL(status)}
                    },
                    {
                        "info": {id: "searches", value: "Liczba wyszukań:"},
                        "status": {id: "searchesValue", value: viewsData.count}
                    },
                    {
                        "info": {id: "comments", value: "Liczba komentarzy:"},
                        "status": {id: "commentsValue", value: commentsTotal}
                    },
                    {
                        "info": {id: "lastChecked", value: "Ostatnio sprawdzany:"},
                        "status": {id: "lastCheckedValue", value: parseFormatDate(attributes?.updatedAt as string)}
                    },
                    {
                        "info": {id: "network", value: "Sieć:"},
                        "status": {id: "networkValue", value: attributes?.network ?? null}
                    }
                ]
            },
            {
                type: 3,
                id: '2',
                typ: 'h3',
                value: 'Wyświetlenia'
            },
            {
                type: 14,
                id: '3',
                data: [{
                    name: 'wyświetleń',
                    color: "var(--uxu-color-background-foreground)",
                    data: [{y: 0, x: '2023-09-01'}, {y: 0, x: '2023-10-01'}, {y: 0, x: '2023-11-01'}, {
                        y: 0,
                        x: '2023-12-01'
                    }, {y: 0, x: '2024-01-01'}, ...viewsData.data]
                }]
            },
            {
                type: 3,
                id: '4',
                typ: 'h3',
                value: 'Oceny'
            },
            {
                type: 13,
                id: '5',
                data: {
                    default: [{color: 'var(--uxu-color-default-1)', x: 'Obojętny', y: ratings?.default || 0}],
                    success: [{
                        color: 'var(--uxu-color-success-1)',
                        x: 'Pozytywny',
                        y: ratings?.success || 0
                    }],
                    warning: [{color: 'var(--uxu-color-warning-1)', x: 'Nieznany', y: ratings?.warning || 0}],
                    danger: [{color: 'var(--uxu-color-danger-1)', x: 'Irytujący', y: ratings?.danger || 0}],
                    error: [{color: 'var(--uxu-color-error-1)', x: 'Niebezpieczny', y: ratings?.error || 0}],
                }
            },
        ],
        cover: gallery[status] || null,
        id: id ?? '',
        phone: attributes?.phone ?? "",
        typ: attributes?.typ ?? "mobile",
        status,
        lead: attributes?.lead.lead ?? "",
        updatedAt: parseFormatDate(attributes?.updatedAt as string),
        createdAt: parseFormatDate(attributes?.createdAt as string),
        format: attributes?.format.map((formatPhone) => {
            const format = formatPhone as ComponentOthersFormat;
            return {id: format.id, title: format.format};
        }) || [],

    };
}
