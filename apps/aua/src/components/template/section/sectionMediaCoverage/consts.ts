import {vectorBrandsPress} from "assets";
import type {PressCoverageLinksType} from 'design-system/components/atoms/pressCoverageLinks';

export const header: [string, string] | [string, string, string] = ['Masz kredyt,', 'a może jest już', 'spłacony?'];

export const description = 'Bank może być Ci winien pieniądze!';

export const buttonLeft = 'Sprawdź umowę';
export const buttonRight = 'Jak to działa?';

export const coverageLinks: PressCoverageLinksType = [
    {
        logoSvg: vectorBrandsPress.onet,
        url: "https://www.onet.pl",
        companyName: "onet"
    }, {
        logoSvg: vectorBrandsPress.wp,
        url: "https://www.wp.pl",
        companyName: "wirtualna polska"
    }, {
        logoSvg: vectorBrandsPress.interia,
        url: "https://www.interia.pl",
        companyName: "interia"
    }, {
        logoSvg: vectorBrandsPress.antyweb,
        url: "https://www.antyweb.pl",
        companyName: "antyweb"
    }, {
        logoSvg: vectorBrandsPress.money,
        url: "https://www.money.pl",
        companyName: "money"
    },
]