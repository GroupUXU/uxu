import { useRouter } from "next/router";

export function useHref(): {
  pathname: string,
  isHrefActive: ( pathname: string ) => boolean,
} {
  const router = useRouter ();

  function isHrefActive ( pathname: string ): boolean {
    return router.asPath === pathname
  }

  return {pathname: router.asPath, isHrefActive}

}