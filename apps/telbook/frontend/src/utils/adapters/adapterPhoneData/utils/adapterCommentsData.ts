import { formatPhoneNumberPL } from 'utils';
import type { Comment , InfoTyp} from 'utils';
import type { CommentRelationResponseCollection } from '../../../../gql';
import { Enum_Comment_Reputation as EnumCommentReputation } from '../../../../gql';

export function adapterCommentsData(getComments?: CommentRelationResponseCollection | null): Array<Comment> {
  if (!getComments?.data.length) return [];
  
  const reputationToNoteType: Record<EnumCommentReputation, InfoTyp> = {
    [EnumCommentReputation.Warning]: 'warning',
    [EnumCommentReputation.Default]: 'default',
    [EnumCommentReputation.Error]: 'error',
    [EnumCommentReputation.Success]: 'success',
    [EnumCommentReputation.Danger]: 'danger',
  };
  
  return getComments.data.reduce((acc: Comment[], { id, attributes }) => {
    const phone = formatPhoneNumberPL(attributes?.phone?.data?.attributes?.phone);
    if (!phone) return acc;
    const reputationKey = attributes?.reputation as EnumCommentReputation | undefined;
    const reputation: InfoTyp = reputationKey ? reputationToNoteType[reputationKey] : 'default';
    
    const comment: Comment = {
      id: id ?? "",
      message: attributes?.message ?? "",
      updatedAt: attributes?.updatedAt as string || "",
      createdAt: attributes?.createdAt as string || "",
      reputation,
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
