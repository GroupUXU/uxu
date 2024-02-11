import {NextRequest, NextResponse} from "next/server";

export function setThemeHeader(req: NextRequest, res: NextResponse): NextResponse {
    const themeCookie: { name: string, value: string } | undefined = req.cookies.get('theme');
    themeCookie !== undefined && res.headers.set('theme', themeCookie.value);
    return res;
}
