import type { ReactElement } from 'react';
import classnames from "classnames";
import { Avatar } from '../../atoms/avatar';
import type { AvatarGroupProps } from "./types";
import styles from './avatarGroup.module.scss';

export function AvatarGroup({ members = [], size, className }: AvatarGroupProps): ReactElement {
  return (
    <ul className={classnames(styles.wrapper, className)}>
      {members.map(({ avatar,id,title }) => (
        <li key={id}>
          <Avatar avatar={avatar} id={id} size={size} title={title} />
        </li>
      ))}
    </ul>
  );
}
