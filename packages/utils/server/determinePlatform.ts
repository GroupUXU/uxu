import { NextRequest } from "next/server";

export function determinePlatform(req: NextRequest): Record<string, boolean> {
  const userAgent: string = req.headers.get('user-agent') || '';
  const isMobilePlatform: boolean = /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(userAgent);
  const isWindows: boolean = /Windows NT/i.test(userAgent);
  const isLinux: boolean = /Linux/i.test(userAgent) && !/Android/i.test(userAgent);
  const isMacOS: boolean = /Mac OS X/i.test(userAgent);

  return {
    isMobilePlatform,
    isWindows,
    isLinux,
    isMacOS,
  };
}
