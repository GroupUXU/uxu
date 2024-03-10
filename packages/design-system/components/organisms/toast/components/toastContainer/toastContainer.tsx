import {useState, useEffect} from "react";
import type {ReactElement, Dispatch} from "react";
import classnames from 'classnames';
import type {ToastChunks, ToastChunk, ToastChunkAction} from "utils";
import {Toast} from "./components/toast/toast";
import styles from './toastContainer.module.scss';

export function ToastContainer({toastChunks, toastChunkDispatch}: {
    toastChunks: ToastChunks,
    toastChunkDispatch: Dispatch<ToastChunkAction>
}): ReactElement {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        setAnimate(false);
        const timer = setTimeout(() => {
            setAnimate(true);
        }, 30);

        return () => {
            clearTimeout(timer);
        };
    }, [toastChunks]);

    return (
        <div className={styles.wrapper}>
            {[...toastChunks].reverse().map(({id, props}: ToastChunk) => (
                <Toast
                    className={classnames(styles.toast, {[styles.animate]: animate})}
                    id={id}
                    key={id}
                    toastChunkDispatch={toastChunkDispatch}
                    {...props}
                />
            ))}
        </div>
    );
}
