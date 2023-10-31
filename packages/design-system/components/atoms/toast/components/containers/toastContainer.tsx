import { useContext, useState, useEffect } from "react";
import { ToastChunksContext } from "providers";
import { Toast } from "../../toast";
import { ToastChunk, generateUniqueId } from "utils";
import styles from './toastContainer.module.scss';
import classnames from 'classnames';

export function ToastContainer () {
  const {toastChunks, toastChunkDispatch} = useContext ( ToastChunksContext );
  const [animate, setAnimate] = useState ( false );

  const add = ( id: number ) => {
    toastChunkDispatch ( {
      type: "ADD_TOAST",
      payload: {
        id: id,
        props: {text: "Korzystamy z plików cookie, aby mierzyć i ulepszać Twoje doświadczenia.", actions: [{Component: <button className="btn">Akceptuj</button>, type: 'remove'}]},
      }
    } );
  }

  useEffect ( () => {
    setAnimate ( false );
    const timer = setTimeout ( () => {
      setAnimate ( true );
    }, 30 );

    return () => {
      clearTimeout ( timer )
    };
  }, [toastChunks] );

  return (
    <>
      <button
        style={{position: 'fixed', top: "12rem", left: "12rem", display: "block"}}
        onClick={() => {
          add ( generateUniqueId () )
        }}>
        add {toastChunks.length}
      </button>
      <div className={styles.wrapper}>
        {[...toastChunks].reverse ().map ( ( {id, props}: ToastChunk ) => (
          <Toast
            id={id}
            key={id}
            {...props}
            className={classnames ( styles.toast, {[ styles.animate ]: animate} )}
          />
        ) )}
      </div>
    </>
  );
}
