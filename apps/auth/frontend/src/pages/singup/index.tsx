import type {ReactElement} from 'react';
import {LayoutLogin} from '../../components/layout/layoutLogin';
import {Box} from '../../components/atoms/box';
import {useSeoConfig} from 'design-system/hooks/useSeoConfig';
import {Link} from 'design-system/components/atoms/link';

function SingUp(): ReactElement {
    const seo = useSeoConfig({});

    return (
        <LayoutLogin seo={seo}>
            <Box>
                <h6 style={{paddingBottom: "var(--uxu-space-default)"}}>Utwórz konto za pomocą</h6>
                <Link className="btn" href="/singup/email" style={{ width: "100%" }} title="email"><b>Email</b></Link>
                <h6 style={{paddingBottom: "var(--uxu-space-default)", paddingTop: "var(--uxu-space-default)"}}>lub</h6>
                <button className="btn" style={{ width: "100%" }}><b>Google</b></button>
                <button className="btn" style={{ width: "100%" }}><b>X</b></button>
                <button className="btn" style={{ width: "100%" }}><b>Facebook</b></button>
                <div style={{display: "flex", width: "100%", justifyContent: "flex-start", paddingTop: "var(--uxu-space-default)"}}>
                    <Link className="btn" href="/" title="email"><b>Wstecz</b></Link>
                </div>
            </Box>
        </LayoutLogin>
    );
};

export default SingUp;
