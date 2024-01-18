import type { NextRequest, NextResponse } from "next/server";
import type {RequestCookie} from 'utils'

export function setRecidHeader(req: NextRequest, res: NextResponse): NextResponse {
    const recidCookie: RequestCookie | undefined = req.cookies.get('recid');

    recidCookie !== undefined && res.headers.set('Set-Recid', recidCookie.name);

    return res;
}
