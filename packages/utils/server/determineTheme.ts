import { NextRequest, NextResponse } from "next/server";
import { CookieManager } from "./../other/cookieManager";

export function determineTheme(req: NextRequest, res: NextResponse): NextResponse {
  const cookieManager: CookieManager = new CookieManager(req.headers.get('Cookie') || "");
  let themeCookie: string = cookieManager.getCookie("theme");

  if (!themeCookie) {
    themeCookie = "dark";
    cookieManager.setCookie("theme", themeCookie);
  }

  res.headers.set('Set-Cookie', `theme=${themeCookie}; path=/; HttpOnly`);
  res.headers.set('theme', themeCookie);

  return res;
}
