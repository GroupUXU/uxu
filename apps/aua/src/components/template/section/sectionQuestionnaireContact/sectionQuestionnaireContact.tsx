import {useState, useEffect} from "react";
import type {ReactElement} from "react";
import {useForm} from 'react-hook-form';
import {Coffee, Clock, DollarSign} from 'react-feather';
import {Link} from "design-system/components/atoms/link";
import {Input} from "design-system/components/molecules/inputs";
import {SectionWithCircle} from "design-system/components/templates/section/sectionWithCircle";
import {useSiteConfig} from "design-system/hooks/useSiteConfig";
import styles from './sectionQuestionnaireContact.module.scss';
import {steps} from './consts';

export function SectionQuestionnaireContact(): ReactElement {
    const {config} = useSiteConfig();
    const [currentStep, setCurrentStep] = useState<number>(0);
    const [formData, setFormData] = useState<Record<number, Record<string, unknown>>>({});
    const {handleSubmit, register, reset, getValues} = useForm();

    useEffect(() => {
        reset(formData[currentStep]);
    }, [currentStep, formData, reset]);

    const isLastStep = currentStep === steps.length - 1;

    function onNext(data: Record<string, unknown>): void {
        const newFormData: Record<number, Record<string, unknown>> = {...formData, [currentStep]: data};
        setFormData(newFormData);

        if (isLastStep) {
            // Submit the entire form
        } else {
            // Go to the next step
            setCurrentStep(currentStep + 1);
        }
    };

    function onBack(): void {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
        }
    };

    const onSubmit = isLastStep ? onNext : () => {
        onNext(getValues());
    };

    return (
        <SectionWithCircle
            id="start"
            color="var(--uxu-gradient-blue-tell)"
            header="Analiza wstępna"
            inCircle="0"
        >
        <div className={styles.wrapper}>
            <div className={styles.wrapperQuestionnaire}>
                <div className={styles.wrapperForm}>
                    <div className={styles.wrapperHeader}>
                        <strong>{steps[currentStep].title}</strong>
                        <p>{steps[currentStep].description}</p>
                    </div>
                    <form onSubmit={() => {
                        handleSubmit(onSubmit)
                    }}>
                        {steps[currentStep].data.map((field) => (
                            field.type === 'text' ? (
                                <Input
                                    key={field.label}
                                    errorMessage={field.errorMessage}
                                    {...register(field.label,
                                        {
                                            required: field.isRequire,
                                            pattern: field.pattern
                                        }
                                    )}
                                    placeholder={field.placeholder}
                                    type={field.type}
                                />
                            ) : null
                        ))}
                        <div className={styles.wrapperButtons}>
                            {currentStep > 0 && (
                                <button className="btn" onClick={onBack} style={{marginRight: "auto"}} type="button">
                                    Wstecz
                                </button>
                            )}
                            <button className="btn primary" type="submit">{isLastStep ? 'Wyślij' : 'Dalej'}</button>
                        </div>
                    </form>
                </div>
                <span className={styles.info}>
                    Przesyłając ten formularz, potwierdzam, że przeczytałem i zrozumiałem{' '}
                    <Link href="/privacy-policy"
                          title="Polityka prywatności">politykę prywatności</Link> firmy {config.admin.company?.name}
                </span>
            </div>
            <div className={styles.wrapperInfo}>
                <p><Coffee size={40}/> My się wszystkim zajmiemy</p>
                <p><Clock size={40}/> W ciągu 72h nasi prawnicy przeanalizują Twoją umowę</p>
                <p><DollarSign size={40}/> Analiza umowy jest w 100% darmowa</p>
            </div>
        </div>

        </SectionWithCircle>
    );
}
