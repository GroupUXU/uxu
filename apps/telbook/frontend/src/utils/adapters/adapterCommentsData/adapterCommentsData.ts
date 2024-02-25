import type { Comment, Status } from 'utils';
import type { GetCommentsQuery } from '../../../gql';

export function adapterCommentsData(getComments: GetCommentsQuery | null): Array<Comment> {
  if (!getComments?.comments?.data.length) return [];

  return getComments.comments.data.reduce((acc: Comment[], { id, attributes }) => {
    const phone = attributes?.phone?.data?.attributes?.phone;
    if (!phone) return acc;

    const comment: Comment = {
      id: id ?? "",
      message: attributes.message || "",
      createdAt: attributes.createdAt as string || "",
      updatedAt: attributes.updatedAt as string || "",
      status: attributes.reputation as Status,
      author: {
        id: attributes.phone?.data?.id ?? "",
        title: phone,
        avatar: null,
      }
    };

    acc.push(comment);
    return acc;
  }, []);
}
