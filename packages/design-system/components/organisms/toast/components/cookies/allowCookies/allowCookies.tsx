import {useContext} from "react";
import type {ReactElement} from "react";
import {setCookies} from "../../../utils/setCookies";
import type {AllowCookiesProps} from "./types";


export function AllowCookies({ToastChunksContext}: AllowCookiesProps): ReactElement {
    const {toastChunkDispatch} = useContext(ToastChunksContext);

    function acceptCookies(): void {
        toastChunkDispatch({type: "REMOVE_TOAST", payload: {id: "cookieInfoDefault"}});
        setCookies({});
    };

    return (
        <button
            aria-label="Akceptuj"
            className="btn primary"
            onClick={() => {
                acceptCookies()
            }}
            title="Akceptuj"
            type="button"
        >Akceptuj</button>
    )
}
