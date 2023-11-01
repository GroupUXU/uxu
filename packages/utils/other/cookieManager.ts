import { checkIsDOM } from "./checkIsDom";

export class CookieManager {
  private defaultExpirationDays = 30;

  constructor ( private cookies?: string ) {
  }

  /**
   * download cookie avalue.
   *
   * @param key cookie
   * @returns value cookie or empty value, if cookie not exist
   */
  public getCookie ( key: string ): string {
    const nameEq = `${key}=`;
    let result = "";

    if ( this.cookies ) {
      const cookiesArray = this.cookies.split ( ';' );
      for (const cookie of cookiesArray) {
        const trimmedCookie = cookie.trim ();
        if ( trimmedCookie.startsWith ( nameEq ) ) {
          result = trimmedCookie.substring ( nameEq.length );
          break;
        }
      }
    } else {
      checkIsDOM ( () => {
        const cookies: Array<string> = decodeURIComponent ( document.cookie ).split ( ';' );
        for (const cookie of cookies) {
          let c = cookie.trim ();

          if ( c.startsWith ( nameEq ) ) {
            result = c.substring ( nameEq.length );
            break;
          }
        }
      } );
    }

    return result;
  }

  /**
   * set cookie.
   *
   * @param key cookie
   * @param value cookie
   * @param expirationDays days from expiration cookie (optional)
   */
  public setCookie(key: string, value: string, option?: { expirationDays?: number, path?: string, sameSite?: 'None' | 'Lax' | 'Strict' }): void {
    checkIsDOM(() => {
      const d = new Date();
      d.setTime(d.getTime() + ((option?.expirationDays || this.defaultExpirationDays) * 24 * 60 * 60 * 1000));
      const expires = `expires=${d.toUTCString()}`;
      const sameSite = option?.sameSite ? `;SameSite=${option.sameSite}` : '';
      const secure = sameSite ? ';Secure' : '';
      const path = `;path=${option?.path || '/'}`;
      document.cookie = `${key}=${value};${expires}${path}${sameSite}${secure}`;
    });
  }

}
