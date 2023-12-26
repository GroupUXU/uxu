import React, { useState, useEffect } from "react";
import { useForm } from 'react-hook-form';
import { Coffee, Clock, DollarSign } from 'react-feather';
import { Link } from "design-system/components/atoms/link";
import { Input } from "design-system/components/molecules/inputs";
import styles from './sectionQuestionnaireContact.module.scss';
import { useSiteConfig } from "design-system/hooks/useSiteConfig";
import { steps } from './consts';

export function SectionQuestionnaireContact() {
    const { config } = useSiteConfig();
    const [currentStep, setCurrentStep] = useState(0);
    const [formData, setFormData] = useState<Record<number, Record<string, unknown>>>({});
    const { handleSubmit, register, reset, getValues } = useForm();

    useEffect(() => {
        reset(formData[currentStep]);
    }, [currentStep, formData, reset]);

    const isLastStep = currentStep === steps.length - 1;

    const onNext = (data) => {
        const newFormData = { ...formData, [currentStep]: data };
        setFormData(newFormData);

        if (isLastStep) {
            // Submit the entire form
            console.log('Final data:', Object.assign({}, ...Object.values(newFormData)));
        } else {
            // Go to the next step
            setCurrentStep(currentStep + 1);
        }
    };

    const onBack = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
        }
    };

    const onSubmit = isLastStep ? onNext : () => {
        onNext(getValues());
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.wrapperQuestionnaire}>
                <div className={styles.wrapperForm}>
                    <div className={styles.wrapperHeader}>
                        <strong>{steps[currentStep].title}</strong>
                        <p>{steps[currentStep].description}</p>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {steps[currentStep].data.map((field, index) => (
                            field.type === 'text' ? (
                                <Input
                                    key={index}
                                    {...register(field.label, {
                                        required: field.isRequire,
                                        pattern: field.pattern
                                    })}
                                    type={field.type}
                                    errorMessage={field.errorMessage}
                                    placeholder={field.placeholder}
                                />
                            ) : null
                        ))}
                        <div className={styles.wrapperButtons}>
                            {currentStep > 0 && (
                                <button type="button" className="btn" style={{ marginRight: "auto" }} onClick={onBack}>
                                    Wstecz
                                </button>
                            )}
                            <button type="submit" className="btn primary">{isLastStep ? 'Wyślij' : 'Dalej'}</button>
                        </div>
                    </form>
                </div>
                <span className={styles.info}>
                    Przesyłając ten formularz, potwierdzam, że przeczytałem i zrozumiałem{' '}
                    <Link href="/privacy-policy" title="Polityka prywatności">politykę prywatności</Link> firmy {config.admin.company?.name}
                </span>
            </div>
            <div className={styles.wrapperInfo}>
                <p><Coffee size={40}/> My się wszystkim zajmiemy</p>
                <p><Clock size={40}/> W ciągu 72h nasi prawnicy przeanalizują Twoją umowę</p>
                <p><DollarSign size={40}/> Analiza umowy jest w 100% darmowa</p>
            </div>
        </div>
    );
}
