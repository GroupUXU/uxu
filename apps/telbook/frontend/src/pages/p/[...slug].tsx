/* eslint-disable camelcase -- I need off camelcase  */
import type {ReactElement} from 'react';
import type {GetStaticPropsContext} from 'next';
import {adapterPhoneData, adapterCommentsData} from '../../utils/adapters';
import {clientGetPhoneQuery, clientGetCommentsQuery, useGetCommentsQuery, useGetPhoneQuery, useAddCommentMutation, type InputMaybe, Enum_Comment_Reputation} from '../../gql';
import {LayoutPhoneView} from 'design-system/components/layout/layoutPhoneView'
import {footerConfig, headerMenuConfig, searchEngineConfig} from "../../config";
import {CrumbleMenu} from "design-system/components/molecules/crumbleMenu";
import {useSeoConfig} from "design-system/hooks/useSeoConfig";
import type {Comment} from "utils";


type PhoneProps = {
		id: string;
		phone: string;
		slug: string;
		initialApolloState?: unknown;
}

export default function Phone({slug, phone, id}: PhoneProps): ReactElement {
		const [addCommentMutation] = useAddCommentMutation();
		const { data: getPhoneQuery } = useGetPhoneQuery({ variables: { id }, ssr: true });
		const { data: getCommentsQuery, fetchMore: fetchMoreComments } = useGetCommentsQuery({
				variables: { pageSize: 12, page: 0, phone },
				ssr: true,
		});
		
		const phoneData = adapterPhoneData(getPhoneQuery, getCommentsQuery);
		const comments = adapterCommentsData(getCommentsQuery);
		
		console.log(phoneData, 'phoneData')
		const seo = useSeoConfig({
				title: `${phone} czyj to numer telefonu ?`,
				description: phoneData.lead || undefined,
				url: phoneData.cover?.src || undefined,
		});
		
		
		const onCommentAdd = async (comment: Partial<Comment>): Promise<boolean> => {
				if (comment.status && comment.message && id) {
						try {
								await addCommentMutation({
										variables: {
												data: {
														reputation: comment.status as InputMaybe<Enum_Comment_Reputation>,
														message: comment.message,
														phone: id,
												},
										},
								});
								return true;
						} catch {
								return false;
						}
				}
				return false;
		};
		
		const onScrollEnd = async (page: number): Promise<{ page?: number }> => {
				try {
						await fetchMoreComments({
								variables: { pageSize: 12, page, phone },
						});
						return { page: page + 1 };
				} catch (error) {
						return { page };
				}
		};
		return (
					<LayoutPhoneView
								seo={seo}
								footer={footerConfig}
								headerMenu={headerMenuConfig}
								onCommentAdd={onCommentAdd}
								comments={comments}
								infiniteScrollMoreComments={{
										page: 0,
										pageCount: getCommentsQuery?.comments?.meta.pagination.pageCount || 0,
										onScrollEnd
								}}
								searchEngineConfig={searchEngineConfig}
								phoneData={phoneData}
								topElement={
										<CrumbleMenu data={[{title: "home", href: "/"}, {title: phoneData.phone || "", href: slug || "/"}]}/>
								}
					/>
		)
					;
}

export async function getServerSideProps(context: GetStaticPropsContext
): Promise<{ notFound: boolean } | { props: PhoneProps }> {
		const {params} = context;
		
		if (!params || !Array.isArray(params.slug) || params.slug.length === 0) {
				return {notFound: true};
		}
		
		const id: string = params.slug[0];
		const phone: string = params.slug[1];
		
		const getCommentsData = await clientGetCommentsQuery({variables: {phone, pageSize: 12, page: 1}});
		const getPhoneQuery = await clientGetPhoneQuery({variables: {id}});
		
		
		if (getPhoneQuery.result.data.phone?.data?.attributes?.phone !== phone) {
				return {notFound: true};
		}
		
		return {
				props: {
						id: params.slug[0],
						phone: params.slug[1],
						slug: `/p/${params.slug[0]}/${params.slug[1]}`,
						initialApolloState: {...getCommentsData.apolloClient.extract(), ...getPhoneQuery.apolloClient.extract()}
				},
		};
}
