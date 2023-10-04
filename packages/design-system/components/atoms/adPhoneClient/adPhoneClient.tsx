import { Phone } from 'react-feather';
import type { ReactElement } from 'react';
import { Link } from "../link";
import { Container } from "../container";
import styles from './adPhoneClient.module.scss';
import type { AdPhoneClientProps } from './types';



function formatTel(tel: string): string {
  return tel.replace(/\s+/g, '');
}

export function AdPhoneClient({ tel, title }: AdPhoneClientProps): ReactElement | null {
  if (!tel || !title) {
    return null;
  }

  const formattedTel = formatTel(tel);

  return (
    <div className={styles.wrapper}>
      <Container>
        <Link href={`tel:${formattedTel}`} title={tel}>
          <Phone style={{ marginRight: "1.5rem" }} />{tel}
        </Link>
        <span>{title}</span>
      </Container>
    </div>
  );
}
