import { NextRequest, NextResponse } from "next/server";
import { determinePlatform } from './determinePlatform';
import { determineTheme } from './determineTheme';

export function middleware(req: NextRequest): NextResponse {
  const platform = determinePlatform(req);
  let response = NextResponse.next();

  for (const [key, value] of Object.entries(platform)) {
    response.headers.set(`X-Is-${key}`, String(value));
  }

  response = determineTheme(req, response);

  return response;
}
