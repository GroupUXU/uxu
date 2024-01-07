import type {ReactElement} from 'react';
import {LayoutLogin} from '../../components/layout/layoutLogin';
import {Box} from '../../components/atoms/box';
import {useSeoConfig} from 'design-system/hooks/useSeoConfig';
import {Link} from 'design-system/components/atoms/link';
import {Note} from 'design-system/components/atoms/note';
import {Input} from 'design-system/components/molecules/inputs';
import {useForm} from "react-hook-form";
import {FORM_FIELD} from "../../consts";
import ChangePassword from "./index";


type FormInputLogin = {
    email: string;
    password: string;
}

function ChangePasswordCode(): ReactElement {
    const seo = useSeoConfig({});
    const {register, handleSubmit, formState: {errors}} = useForm<FormInputLogin>();

    const handleFormSubmit = async () => {
        // empty
    };

    return (
        <LayoutLogin seo={seo}>
            <Box>
                <h6 style={{paddingBottom: "var(--uxu-space-default)"}}>Resetuj hasło</h6>
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
                    <Note type="success" fill>Na adres email, wysłaliśmy kod</Note>
                    <Input
                        {...register('email', FORM_FIELD.email)}
                        errorMessage={errors.email?.message}
                        placeholder="Podaj kod" type="kod"
                    />

                    <div style={{
                        display: "flex",
                        width: "100%",
                        justifyContent: "flex-start",
                        paddingTop: "var(--uxu-space-default)"
                    }}>
                        <Link className="btn" href="/" title="email"><b>Wstecz</b></Link>
                        <Link className="btn primary" href="/changepassword/reset" title="dalej" style={{marginLeft: "auto"}}><b>Dalej</b></Link>
                    </div>
                </form>
            </Box>
        </LayoutLogin>
    );
};

export default ChangePasswordCode;
