/* eslint-disable @typescript-eslint/no-unnecessary-condition -- eslint has problem */
import type { ReactElement } from 'react';
import { useForm } from "react-hook-form";
import { useSeoConfig, useSiteConfig } from "hooks";
import type { SearchEngineConfig } from "utils";
import { Input, LayoutFull, Link, Textarea } from '../../components';
import type { FooterProps } from "../../components/templates/footer/types";
import type { SearchSuggestionContentDetails } from "../../components/organisms/searchEngine/searchEngineInModal/types";
import styles from './contact.module.scss';
import { FORM_FIELD } from "./consts";

type FormInputs = {
  email: string;
  message: string;
}

type TermsProps = {
  footer: FooterProps,
  headerMenu: Array<{ slug: string, title: string }>,
  defaultSuggestions: SearchEngineConfig<Array<SearchSuggestionContentDetails>>
}


export function Contact({ footer, headerMenu, defaultSuggestions }: TermsProps): ReactElement {
  const { register, handleSubmit, formState: { errors } } = useForm<FormInputs>();
  const { config } = useSiteConfig();
  const seo = useSeoConfig({ title: `Regulamin - ${config.site?.domain || ""}` });
  const company = config.admin?.company;
  const mainEmail = company?.contact.pl?.email?.find(contact => contact.type === 'main');
  const mainPhone = company?.contact.pl?.phone?.find(contact => contact.type === 'mobile');

  const handleFormSubmit = async (): Promise<void> => { /* empty */ };

  return (
    <LayoutFull
      footer={footer}
      headerMenu={headerMenu}
      searchEngineConfig={defaultSuggestions}
      seo={seo}
    >
      <div className={styles.header}>
        <h1>Porozmawiaj z naszym zespołem</h1>
        <p>Pomożemy Ci znaleźć odpowiednie rozwiązanie.</p>
      </div>
      <div className={styles.container}>
        <div className={styles.wrapperContactForm}>
          <form onSubmit={(e) => {
            e.preventDefault(); // Prevent default form submission
            void handleSubmit(handleFormSubmit)(); // Notice the double invocation here
          }}>
            <Input
              {...register('email', FORM_FIELD.email)}
              errorMessage={errors.email?.message}
              placeholder="Adres email"
              type="email"
            />
            <Textarea
              {...register('message', FORM_FIELD.message)}
              errorMessage={errors.message?.message}
              placeholder="Opisz swój problem"
            />
            <button className="btn primary" type="submit">Wyślij</button>
          </form>
          <span>Przesyłając ten formularz, potwierdzam, że przeczytałem i zrozumiałem <Link href="/privacy-policy" title="Polityka prywatności">politykę prywatności</Link> firmy {company?.name}</span>
        </div>
        <div className={styles.wrapperContactData}>
          <ul>
            {company?.name ? <li><h3>{company.name}</h3></li> : null}
            {company?.street ? <li><p>{company.street}</p></li> : null}
            {company?.postCode ? <li><p>{company.postCode} {company.city}</p></li> : null}
            {company?.tax?.pl?.krs ? <li><p><b>KRS:</b> {company.tax.pl.krs}</p></li> : null}
            {company?.tax?.pl?.regon ? <li><p><b>REGON:</b> {company.tax.pl.regon}</p></li> : null}
            {company?.tax?.pl?.nip ? <li><p><b>NIP:</b> {company.tax.pl.nip}</p></li> : null}
            {company?.tax?.pl?.shareCapitalInPLN ? <li><p><b>Kapitał zakładowy:</b> {company.tax.pl.shareCapitalInPLN} PLN</p></li> : null}
            {company?.tax?.pl?.accountsBank?.map(account => (
              <li key={account.iban}><p><b>{account.bank}:</b> {account.iban}</p></li>
            ))}
            {mainPhone ? <li><p><b>Tel:</b> +48 {mainPhone.number}</p></li> : null}
            {mainEmail ? <li><p><b>Email:</b> {mainEmail.email}</p></li> : null}
          </ul>
        </div>
      </div>
    </LayoutFull>
  );
};
