import { formatPhoneNumberPL } from 'utils';
import type { Comment, InfoTyp } from 'utils';
import type { GetCommentsQuery } from '../../../gql';

export function adapterCommentsData(getComments: GetCommentsQuery): Array<Comment> {
  if (!getComments.comments?.data.length) return [];
  
  return getComments.comments.data.reduce((acc: Comment[], { id, attributes }) => {
    const phone = formatPhoneNumberPL(attributes?.phone?.data?.attributes?.phone);
    if (!phone) return acc;
    
    const comment: Comment = {
      id: id ?? "",
      message: attributes?.message ?? "",
      createdAt: attributes?.createdAt as string || "",
      updatedAt: attributes?.updatedAt as string || "",
      reputation: attributes?.reputation as InfoTyp,
      author: {
        id: attributes?.phone?.data?.id ?? "",
        title: phone,
        avatar: undefined,
      }
    };
    
    acc.push(comment);
    return acc;
  }, []);
}
