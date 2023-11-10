/* eslint-disable @typescript-eslint/no-unnecessary-condition -- Disabling false positive due to valid optional chaining usage */
import { useState, useCallback } from 'react';
import type { ReactElement } from 'react';
import { useForm } from "react-hook-form";
import { requestStatus } from 'utils';
import { useSeoConfig, useSiteConfig } from "hooks";
import { Note, LoadingDots } from '../../components/atoms';
import { Input, LayoutFull, Link, Textarea } from '../../components';
import type { ContactProps, ContactFormInputsProps } from "./types";
import styles from './contact.module.scss';
import { FORM_FIELD } from "./consts";

export function Contact({ footer, headerMenu, defaultSuggestions, sendMessage }: ContactProps): ReactElement {
  const [statusMessage, setStatusMessage] = useState<requestStatus>(requestStatus.preparing);
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormInputsProps>();
  const { config } = useSiteConfig();
  const seo = useSeoConfig({ title: `Kontakt - ${config.site?.domain || ""}` });
  const company = config.admin?.company;
  const tax = company?.tax;
  const mainEmail = company?.contact.pl?.email?.find ( contact => contact.type === 'main')?.email;
  const mainPhone = company?.contact.pl?.phone?.find ( contact => contact.type === 'mobile')?.number;

  const handleFormSubmit = useCallback(async (data: ContactFormInputsProps): Promise<void> => {
    setStatusMessage(requestStatus.awaiting);

    try {
      const response = await sendMessage(data);
      setStatusMessage(response.status ? requestStatus.success : requestStatus.failed);
      setTimeout(() => {
        reset();
        setStatusMessage(requestStatus.preparing);
      }, 5000);
    } catch (error) {
      setStatusMessage(requestStatus.failed);
      setTimeout(() => {
        setStatusMessage ( requestStatus.preparing )
      }, 5000);
    }
  }, [sendMessage, reset]);

  const renderStatusMessage = (): ReactElement | null => {
    switch (statusMessage) {
      case requestStatus.preparing:
        return (
          <>
            <Input {...register('email', FORM_FIELD.email)} errorMessage={errors.email?.message} placeholder="Adres email" type="email" />
            <Textarea {...register('message', FORM_FIELD.message)} errorMessage={errors.message?.message} placeholder="Opisz swój problem" />
            <button className="btn primary" type="submit">Wyślij</button>
          </>
        );
      case requestStatus.failed:
        return <Note type="error">Nie udało się wysłać wiadomości :(</Note>;
      case requestStatus.success:
        return <Note type="success">Sukces! Twoja wiadomość została wysłana pomyślnie.</Note>;
      case requestStatus.awaiting:
        return <Note action={<LoadingDots size={1}/>} type="warning">Trwa wysyłanie wiadomości... Proszę czekać.</Note>;
      default:
        return null;
    }
  };

  return (
    <LayoutFull footer={footer} headerMenu={headerMenu} searchEngineConfig={defaultSuggestions} seo={seo}>
      <div className={styles.header}>
        <h1>Porozmawiaj z naszym zespołem</h1>
        <p>Pomożemy Ci znaleźć odpowiednie rozwiązanie.</p>
      </div>
      <div className={styles.container}>
        <div className={styles.wrapperContactForm}>
          <form onSubmit={(e) => {
            e.preventDefault();
            void handleSubmit(handleFormSubmit)();
          }}>
            {renderStatusMessage()}
          </form>
          <span className={styles.info}>
            Przesyłając ten formularz, potwierdzam, że przeczytałem i zrozumiałem <Link href="/privacy-policy" title="Polityka prywatności">politykę prywatności</Link> firmy {company?.name}
          </span>
        </div>
        <div className={styles.wrapperContactData}>
          <ul>
            {company?.name ? <li><h3>{company.name}</h3></li> : null}
            {company?.street ? <li><p>{company.street}</p></li> : null}
            {company?.postCode ? <li className={styles.space}><p>{company.postCode} {company.city}</p></li> : null}
            {tax?.pl?.krs ? <li><p><b>KRS:</b> {tax.pl.krs}</p></li> : null}
            {tax?.pl?.regon ? <li><p><b>REGON:</b> {tax.pl.regon}</p></li> : null}
            {tax?.pl?.nip ? <li className={styles.space}><p><b>NIP:</b> {tax.pl.nip}</p></li> : null}
            {tax?.pl?.shareCapitalInPLN ?
              <li className={styles.space}><p><b>Kapitał zakładowy:</b> {tax.pl.shareCapitalInPLN} PLN</p>
              </li> : null}
            {tax?.pl?.accountsBank?.map ( account => (
              <li className={styles.space} key={account.iban}><p><b>{account.bank}:</b> {account.iban}</p></li>
            ) )}
            {mainPhone ? <li><p><b>Tel:</b> +48 {mainPhone}</p></li> : null}
            {mainEmail ? <li><p><b>Email:</b> {mainEmail}</p></li> : null}
          </ul>
        </div>
      </div>
    </LayoutFull>
  );
};
