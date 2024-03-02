import type { ReactElement } from 'react';
import type {HeaderChunkProps} from './types';
import style from './headerChunk.module.scss';

export function HeaderChunk({typ, value}:HeaderChunkProps): ReactElement {
  switch (typ){
    case 'h1':
      return <h1 className={style.header}>{value}</h1>;
    case 'h2':
      return <h2 className={style.header}>{value}</h2>;
    case 'h3':
      return <h3 className={style.header}>{value}</h3>;
    case 'h4':
      return <h4 className={style.header}>{value}</h4>;
    case 'h5':
      return <h5 className={style.header}>{value}</h5>;
    case 'h6':
      return <h6 className={style.header}>{value}</h6>;
    default:
      return <strong className={style.header}>{value}</strong>
  }
}
