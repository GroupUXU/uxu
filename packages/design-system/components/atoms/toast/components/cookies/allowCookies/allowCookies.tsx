import type { ReactElement } from "react";
import { setCookies } from "../../../utils";

export function AllowCookies(): ReactElement {

  return (
    <button
      className="btn primary"
      onClick={() => {
        setCookies ( {} )
      }}
      title="Akceptuj"
      type="button"
    >Akceptuj</button>
  )
}