import type { ReactElement  } from 'react';
import { Tree, Branch } from '../../../molecules/tree';
import type { MobileVerticalModalProps } from "./types";

export function MobileVerticalModal({ activeHref, headerMenu, isLinkActive }: MobileVerticalModalProps): ReactElement {
 return (
    <Tree activeHref={activeHref} full>
      {headerMenu.map(({ href, title }: { href: string, title: string }) => (
        <Branch active={isLinkActive(href)} href={href} key={href} title={title} />
      ))}
    </Tree>
  )
}