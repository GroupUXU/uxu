import {emailRegExp, passwordRegExp} from "utils";

export const FORM_FIELD = {
    email: {
        required: "Podaj email",
        pattern: {
            value: emailRegExp,
            message: "Wprowadź poprawny adres e-mail",
        },
    },
    password: {
        required: "Podaj hasło",
        pattern: {
            value: passwordRegExp,
            message: "8-40 znaków, w tym duże i małe litery, cyfra, znak specjalny.",
        },
    },
};