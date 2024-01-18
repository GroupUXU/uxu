import type { NextRequest, NextResponse } from "next/server";
import { parse } from 'url';
import { RequestCookie } from "../../types";

export function setRecidHeader(req: NextRequest, res: NextResponse): NextResponse {
    const recidQueryParam: string | Array<string> | undefined = parse(req.url, true).query.recid;
    const recidCookie: RequestCookie | undefined = req.cookies.get('recid');

    if (recidCookie || typeof recidQueryParam === 'string') {
        res.headers.set('recid', recidCookie ? recidCookie.name : recidQueryParam as string);
        res.headers.set('recidcookie', recidCookie ? 'true' : 'false');
    }

    return res;
}
