import {emailRegExp, phoneRegExp} from "utils";
import type {Step} from './types';

export const steps: Array<Step> = [
    {
        title: "Umów się z nami na analizę Twojej umowy",
        description: "Analiza umowy nie jest zobowiązująca i jest w 100% darmowa",
        data: [
            {
                type: 'text', isRequire: true, errorMessage: "Twoje Imie jest wymagane", label: 'name', placeholder: 'Imię'
            },
            {
                type: 'text', isRequire: true, errorMessage: "Twoje Nazwisko jest wymagane", label: 'secondName', placeholder: 'Nazwisko'
            },
            {
                type: 'text',
                isRequire: true,
                errorMessage: "Numer teleofnu jest nieprawidłowy",
                label: 'phone',
                placeholder: 'Tel.',
                pattern: {
                    value: phoneRegExp,
                    message: "Wprowadź poprawny numer telefonu",
                },
            },
            {
                type: 'text',
                isRequire: true,
                errorMessage: "Adres email jest nieprawidłowy",
                label: 'email',
                placeholder: 'Email',
                pattern: {
                    value: emailRegExp,
                    message: "Wprowadź poprawny adres email",
                },
            },
        ]
    },
]