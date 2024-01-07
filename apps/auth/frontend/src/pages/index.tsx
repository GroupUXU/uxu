import type {ReactElement} from 'react';
import {LayoutLogin} from '../components/layout/layoutLogin';
import {Box} from '../components/atoms/box';
import {useSeoConfig} from 'design-system/hooks/useSeoConfig';
import {Link} from 'design-system/components/atoms/link';

function Index(): ReactElement {
    const seo = useSeoConfig({});


    return (
        <LayoutLogin seo={seo}>
            <Box>
                <h6 style={{ paddingBottom: "var(--uxu-space-default)"}}>Zaloguj się za pomocą</h6>
                <Link className="btn" href="/login" style={{ width: "100%" }} title="email"><b>Email</b></Link>
                <button className="btn" style={{ width: "100%" }}><b>Google</b></button>
                <button className="btn" style={{ width: "100%" }}><b>X</b></button>
                <button className="btn" style={{ width: "100%" }}><b>Facebook</b></button>
                <h6 style={{paddingBottom: "var(--uxu-space-default)", paddingTop: "var(--uxu-space-default)"}}>lub</h6>
                <Link className="btn primary" href="/singup" style={{ width: "100%" }} title="Utówrz nowe konto"><b>Utówrz nowe konto</b></Link>
            </Box>
        </LayoutLogin>
    );
};

export default Index;
