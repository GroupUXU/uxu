import { useState, useEffect } from "react";
import type { ReactElement } from "react";
import { useForm } from 'react-hook-form';
import { Coffee, Clock, DollarSign } from 'react-feather';
import {CookieManager} from "utils";
import { Link } from "design-system/components/atoms/link";
import { Input } from "design-system/components/molecules/inputs";
import { SectionWithCircle } from "design-system/components/templates/section/sectionWithCircle";
import { useSiteConfig } from "design-system/hooks/useSiteConfig";
import { useAddLeadMutation } from '../../../../gql';
import { LeadInput } from '../../../../gql';
import styles from './sectionQuestionnaireContact.module.scss';
import { steps } from './consts';
import { LoadingWheel } from "design-system/components/atoms/loading";
import { Note } from "design-system/components/atoms/note";

export function SectionQuestionnaireContact(): ReactElement {
    const { config } = useSiteConfig();
    const cookie = new CookieManager();
    const [addLeadMutation] = useAddLeadMutation();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<{ success?: boolean, message?: string }>({});
    const [currentStep, setCurrentStep] = useState(0);

    const { handleSubmit, register, reset, formState: { errors } } = useForm<LeadInput>({
        defaultValues: steps[currentStep].data.reduce((acc, field) => ({
            ...acc, [field.label]: ''
        }), {})
    });

    useEffect(() => {
        reset(steps[currentStep].data.reduce((acc, field) => ({
            ...acc, [field.label]: ''
        }), {}));
    }, [currentStep, reset]);

    const isLastStep = currentStep === steps.length - 1;

    const onSubmit = async (data: LeadInput): Promise<void> => {
        if (isLastStep) {
            setIsSubmitting(true);
            try {
                await addLeadMutation({ variables: { data: { ...data, recid: cookie.getCookie('recid') } } });
                setSubmitStatus({ success: true, message: "Niebawem skontaktujemy się z Tobą :)" });
                resetTimeout();
            } catch (error) {
                setSubmitStatus({ success: false, message: "Upss... coś poszło nie tak... spróbuj jeszcze raz..." });
                resetTimeout();
            }
        } else {
            setCurrentStep(currentStep + 1);
        }
    };

    function onBack(): void {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
        }
    };

    const resetTimeout = () => {
        setTimeout(() => {
            reset();
            setSubmitStatus({});
            setIsSubmitting(false);
        }, 10000);
    };

    const renderInfo = () => {
        if (isSubmitting) {
            if (submitStatus.success !== undefined) {
                return submitStatus.success
                    ? <Note type="success">{submitStatus.message}</Note>
                    : <Note type="error">{submitStatus.message}</Note>;
            } else {
                return <Note type="warning" action={<LoadingWheel size={2} />}>Zapisuję...</Note>;
            }
        }
        return null;
    };

    return (
        <SectionWithCircle id="start" color="var(--uxu-gradient-blue-tell)" header="Analiza wstępna" inCircle="0">
            <div className={styles.wrapper}>
                <div className={styles.wrapperQuestionnaire}>
                    <div className={styles.wrapperForm}>
                        {isSubmitting ? renderInfo() : (
                            <>
                                <div className={styles.wrapperHeader}>
                                    <strong>{steps[currentStep].title}</strong>
                                    <p>{steps[currentStep].description}</p>
                                </div>
                                <form onSubmit={(e) => {
                                    e.preventDefault();
                                    handleSubmit(onSubmit)(e).catch(() => { /* empty */ });
                                }}>
                                    {steps[currentStep].data.map((field) => (
                                        <Input
                                            key={field.label}
                                            errorMessage={errors[field.label as "name" | "email" | "secondName" | "phone"] && field.errorMessage}
                                            {...register(field.label as "name" | "email" | "secondName" | "phone", {
                                                required: field.isRequire,
                                                pattern: field.pattern
                                            })}
                                            placeholder={field.placeholder}
                                            type={field.type}
                                        />
                                    ))}
                                    <div className={styles.wrapperButtons}>
                                        {currentStep > 0 && (
                                            <button className="btn" onClick={onBack} style={{ marginRight: "auto" }}
                                                    type="button">
                                                Wstecz
                                            </button>
                                        )}
                                        <button className="btn primary" type="submit">
                                            {isLastStep ? 'Wyślij' : 'Dalej'}
                                        </button>
                                    </div>
                                </form>
                            </>
                        )}
                    </div>
                    <span className={styles.info}>
                        Przesyłając ten formularz, potwierdzam, że przeczytałem i zrozumiałem{' '}
                        <Link href="/privacy-policy" title="Polityka prywatności">
                            politykę prywatności
                        </Link> firmy {config.admin.company?.name}
                    </span>
                </div>
                <div className={styles.wrapperInfo}>
                    <p><Coffee size={40} /> My się wszystkim zajmiemy</p>
                    <p><Clock size={40} /> W ciągu 72h nasi prawnicy przeanalizują Twoją umowę</p>
                    <p><DollarSign size={40} /> Analiza umowy jest w 100% darmowa</p>
                </div>
            </div>
        </SectionWithCircle>
    );
}
