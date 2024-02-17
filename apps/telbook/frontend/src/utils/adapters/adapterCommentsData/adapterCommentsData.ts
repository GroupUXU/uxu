/* eslint-disable @typescript-eslint/no-unsafe-assignment -- i repair next time */
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
    const data = attributes;
    const reputation: NoteType = reputationToNoteType[data?.author || ''] || 'default';
    
    return {
      id: id || "",
      createdAt: data?.createdAt as string || "",
      message: data?.message || "",
      type: reputation,
      phone: formatPhoneNumberPL(data?.phone?.data?.attributes?.phone) || undefined,
    };
  });
}
