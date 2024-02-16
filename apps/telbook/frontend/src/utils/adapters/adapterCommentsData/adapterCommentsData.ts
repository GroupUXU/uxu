import { formatPhoneNumberPL } from 'utils/phones';
import type { Comment } from 'utils';
import { NoteType } from 'design-system/components/atoms/note/types';
import type { GetCommentsQuery } from '../../../gql';
import { Enum_Phone_Reputation as EnumPhoneReputation } from '../../../gql';

export function adapterCommentsData(getComments: GetCommentsQuery): Array<Comment & { type: NoteType, phone?: string }> {
  if (!getComments.comments?.data.length) return [];
  
  const reputationToNoteType: Record<EnumPhoneReputation, NoteType> = {
    [EnumPhoneReputation.Annoying]: 'warning',
    [EnumPhoneReputation.Inert]: 'default',
    [EnumPhoneReputation.Negative]: 'error',
    [EnumPhoneReputation.Positive]: 'success',
    [EnumPhoneReputation.Unknown]: 'default',
  };
  
  return getComments.comments.data.map(({ id, attributes }) => {
    const { message, author, phone, createdAt } = attributes || {};
    const reputation = author as EnumPhoneReputation;
    const type: NoteType = reputationToNoteType[reputation] ?? 'default';
    
    return {
      id: id ?? "",
      createdAt: createdAt ? String(createdAt) : "",
      message: message ?? "",
      type,
      phone: formatPhoneNumberPL(phone?.data?.attributes?.phone) || undefined,
    };
  });
}
