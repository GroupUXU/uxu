export type FormData = Record<string, unknown>;

export type Step = {
    title: string;
    description: string;
    data: InputField[];
};

export type InputField = {
    type: 'text' | 'email' | 'tel';
    isRequire: boolean;
    errorMessage: string;
    label: string;
    placeholder: string;
    pattern?: InputPattern;
};

type InputPattern = {
    value: RegExp;
    message: string;
};