import {emailRegExp, phoneRegExp} from "utils";
import type {Step} from './types';

export const steps: Array<Step> = [
    {
        title: "Umów się z nami na analizę twojej umowy",
        description: "Naliza umowy nie jest zobowiązująca i jest w 100% darmowa",
        data: [
            {
                type: 'text', isRequire: true, errorMessage: "", label: 'spoko', placeholder: 'spoko'
            },
            {
                type: 'text', isRequire: true, errorMessage: "", label: 'xx', placeholder: 'xx'
            },
        ]
    },
    {
        title: "Umów się z nami na analizę twojej umowy",
        description: "Naliza umowy nie jest zobowiązująca i jest w 100% darmowa",
        data: [
            {
                type: 'text', isRequire: true, errorMessage: "", label: 'kupa', placeholder: 'kupa'
            },
            {
                type: 'text', isRequire: true, errorMessage: "", label: 'ok', placeholder: 'ok'
            },
        ]
    },
    {
        title: "Umów się z nami na analizę twojej umowy",
        description: "Naliza umowy nie jest zobowiązująca i jest w 100% darmowa",
        data: [
            {
                type: 'text', isRequire: true, errorMessage: "", label: 'Imię', placeholder: 'Twoje Imię'
            },
            {
                type: 'text', isRequire: true, errorMessage: "", label: 'Nazwisko', placeholder: 'Twoje Nazwisko'
            },
            {
                type: 'text',
                isRequire: true,
                errorMessage: "",
                label: 'Numer telefonu',
                placeholder: 'Twój numer telefonu',
                pattern: {
                    value: phoneRegExp,
                    message: "Wprowadź poprawny numer telefonu",
                },
            },
            {
                type: 'email',
                isRequire: true,
                errorMessage: "",
                label: 'Email',
                placeholder: 'Twój adres email',
                pattern: {
                    value: emailRegExp,
                    message: "Wprowadź poprawny adres email",
                },
            },
        ]
    },
]