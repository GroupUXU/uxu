import { NextRequest, NextResponse } from "next/server";
import { setPlatformHeader, setRecidHeader, setThemeHeader } from './set';

export function middleware(req: NextRequest): NextResponse {
  const platform = setPlatformHeader(req);
  let response = NextResponse.next();

  for (const [key, value] of Object.entries(platform)) {
    response.headers.set(`uxu-${key}`, String(value));
  }

  response = setThemeHeader(req, response);
  response = setRecidHeader(req, response);

  return response;
}
