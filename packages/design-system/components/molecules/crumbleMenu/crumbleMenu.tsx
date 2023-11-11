import type { ReactElement } from "react";
import { Home } from 'react-feather';
import classnames from "classnames";
import { useHref } from "hooks";
import { Container, Link } from "../../atoms";
import type { CrumbleMenuProps } from './types'
import styles from './crumbleMenu.module.scss';

export function CrumbleMenu ( { data }: { data?: CrumbleMenuProps } ): ReactElement {
  const { isHrefActive, pathname } = useHref ()
  return (
    <Container>
      <ul className={styles.wrapper}>
        {data?.map ( ( item ) => {
          if ( item.href === "/" ) return (
            <li
              className={classnames ( {[ styles.active ]: isHrefActive ( item.href )} )}
              key={item.title}
            >
              <Link href={item.href} title={item.title}><Home size={16}/> {pathname === "/" && item.title}</Link>
            </li>
          )
          if(isHrefActive( item.href )) return (
            <li
              className={classnames ( {[ styles.active ]: isHrefActive( item.href )} )}
              key={item.title}
            >
              <span>{item.title}</span>
            </li>
          )
          return (
            <li
              className={classnames ( {[ styles.active ]: isHrefActive( item.href )} )}
              key={item.title}
            >
              <Link href={item.href} title={item.title}>{item.title}</Link>
            </li>
          )
        })}
      </ul>
    </Container>
  )
}