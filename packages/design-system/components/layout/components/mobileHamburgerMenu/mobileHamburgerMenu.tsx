import type { ReactElement  } from 'react';
import { Tree, Branch } from '../../../atoms';
import type { MobileVerticalModalProps } from "./types";

export function MobileVerticalModal({ currentSlug, menuItems, isLinkActive }: MobileVerticalModalProps): ReactElement {
 return (
    <Tree activeSlug={currentSlug} full>
      {menuItems.map (({ slug, title }: {slug: string, title: string }) => (
        <Branch active={isLinkActive(slug)} key={slug} title={title} url={slug}/>
      ) )}
    </Tree>
  )
}
