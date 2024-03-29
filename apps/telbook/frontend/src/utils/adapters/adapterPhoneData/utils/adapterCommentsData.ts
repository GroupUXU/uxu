import { parserPhoneNumberPL } from 'utils';
import type { Comment , Status} from 'utils';
import type { CommentEntityResponseCollection } from '../../../../gql';

export function adapterCommentsData(getComments?: CommentEntityResponseCollection | null): Array<Comment> {
  if (!getComments?.data.length) return [];

  return getComments.data.reduce((acc: Comment[], { id, attributes }) => {
    const phone = attributes?.phone?.data?.attributes?.phone ? parserPhoneNumberPL(attributes.phone.data.attributes.phone) : null;
    if (!phone) return acc;
    const status = attributes?.reputation as Status | 'default';

    const comment: Comment = {
      id: id ?? "",
      message: attributes?.message ?? "",
      updatedAt: attributes?.updatedAt as string || "",
      createdAt: attributes?.createdAt as string || "",
      status,
      author: {
        id: attributes?.phone?.data?.id ?? "",
        title: phone,
        avatar: null,
      }
    };

    acc.push(comment);
    return acc;
  }, []);
}
