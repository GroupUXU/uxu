import type { ReactElement } from 'react';
import { Link } from "../../../../atoms/link";
import type { SocialLinkData } from './types';

export function SocialLink ( {name, accountId, url, Icon}: SocialLinkData ): ReactElement | null {
  if ( !accountId ) return null;

  const href = `${url}${accountId}`;

  return (
    <li>
      <Link href={href} title={name}>
        <Icon size={18}/>
      </Link>
    </li>
  );
}