import type {ReactElement} from 'react';
import {LayoutLogin} from '../../components/layout/layoutLogin';
import {Box} from '../../components/atoms/box';
import {useSeoConfig} from 'design-system/hooks/useSeoConfig';
import {Note} from 'design-system/components/atoms/note';

function Info(): ReactElement {
    const seo = useSeoConfig({});

    return (
        <LayoutLogin seo={seo}>
            <Box>
                <Note type="success" fill>Treść infomacji</Note>
            </Box>
        </LayoutLogin>
    );
};

export default Info;
