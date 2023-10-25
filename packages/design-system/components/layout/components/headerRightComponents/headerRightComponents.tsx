import type { ReactElement } from 'react';
import { Feedback } from '../../../organisms';
import type { HeaderRightComponentsProps } from './types';

export function HeaderRightComponents({ switchModalButtonText, modalAlignment }: HeaderRightComponentsProps): ReactElement {
  return (
    <Feedback
      modalAlignment={modalAlignment}
      onFeedbackSubmit={async () => {
        return new Promise(resolve => {
          setTimeout(() => {
            resolve({ success: true });
          }, 3000);
        });
      }}
      switchModalButtonText={switchModalButtonText}
    />
  );
}

