import type {ReactElement} from 'react';
import {LayoutLogin} from '../../components/layout/layoutLogin';
import {Box} from '../../components/atoms/box';
import {useSeoConfig} from 'design-system/hooks/useSeoConfig';
import {Link} from 'design-system/components/atoms/link';
import {Input} from 'design-system/components/molecules/inputs';
import {useForm} from "react-hook-form";
import {FORM_FIELD} from "../../consts";


type FormInputLogin = {
    email: string;
    password: string;
    confirmPassword: string;
}

function SingUpEmail(): ReactElement {
    const seo = useSeoConfig({});
    const {register, handleSubmit, watch, formState: {errors}} = useForm<FormInputLogin>();
    const password = watch('password');
    const handleFormSubmit = async () => {
        // empty
    };

    return (
        <LayoutLogin seo={seo}>
            <Box info>
                <h6 style={{paddingBottom: "var(--uxu-space-default)"}}>Utwórz konto</h6>
                <form
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "var(--uxu-space-small)",
                        width: "100%",
                    }}
                    onSubmit={(e) => {
                        e.preventDefault();
                        void handleSubmit(handleFormSubmit)();
                    }}
                >
                    <Input {...register('email', FORM_FIELD.email)} errorMessage={errors.email?.message}
                           placeholder="Email" type="email"/>
                    <Input {...register('password', FORM_FIELD.password)} errorMessage={errors.password?.message}
                           placeholder="Hasło" type="password"/>
                    <Input {...register('confirmPassword', {
                        required: "Powtórz hasło",
                        validate: confirmPassword => confirmPassword === password || "Hasła nie są takie same"
                    })} errorMessage={errors.confirmPassword?.message}
                           placeholder="Potwierdź hasło" type="password"/>

                    <div
                        style={{
                            display: "flex",
                            width: "100%",
                            justifyContent: "flex-start",
                            paddingTop: "var(--uxu-space-default)"
                        }}
                    >
                        <Link className="btn" href="/singup" title="email"><b>Wstecz</b></Link>
                        <button className="btn primary" style={{marginLeft: "auto"}}
                                title="zaloguj" type="submit"><b>Utwórz konto</b></button>
                    </div>
                </form>
            </Box>
        </LayoutLogin>
    );
};

export default SingUpEmail;
