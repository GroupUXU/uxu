 
import type { ReactElement } from 'react';
import DynamicLink from 'next/link';
import classnames from 'classnames';
import { regexURLRegExp } from 'utils';
import type { LinkProps } from './types';

export function Link({ children, className, href, title }: LinkProps): ReactElement {
  const isExternal = regexURLRegExp.test(href);
  const externalLinkProps = isExternal && { target: '_blank', rel: 'noopener noreferrer' };

  const linkClasses = classnames(className);

  if (isExternal) {
    return (
      <a className={linkClasses} href={href} title={title} {...externalLinkProps}>
        {children}
      </a>
    );
  }

  return (
    <DynamicLink className={linkClasses} href={href} passHref title={title}>
      {children}
    </DynamicLink>
  );
}
