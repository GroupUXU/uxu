import classnames from "classnames";
import { User } from 'react-feather';
import Image from 'next/image';
import type { ReactElement } from 'react';
import type { AvatarProps } from './types';
import styles from './avatar.module.scss';

export function Avatar({ avatar, size = 'default', title = 'avatar' }: AvatarProps): ReactElement {

  const avatarSize = size !== 'small' && size !== 'large' ? 'default' : size;
  const avatarClassName = classnames(styles.wrapper, styles[avatarSize]);

  let userIconSize: number;
  if (avatarSize === 'default') {
    userIconSize = 21;
  } else if (avatarSize === 'small') {
    userIconSize = 15;
  } else {
    userIconSize = 30;
  }

  return (
    <div className={avatarClassName} title={title}>
      {avatar?.src ? (
        <Image
          alt={avatar.alt || title}
          fill
          src={avatar.src}
        />
      ) : (
        <User size={userIconSize} />
      )}
    </div>
  );
}

