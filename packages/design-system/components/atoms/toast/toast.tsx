import { useContext, cloneElement, ReactElement } from "react";
import { ToastChunksContext } from "providers";
import { X } from 'react-feather';
import styles from './toast.module.scss';
import type { ToastProps } from "utils";
import { generateUniqueId } from "utils";
import classnames from "classnames";


export function Toast ( {id, text, visual, actions = [], className, type: toastType}: ToastProps ) {
  const {toastChunkDispatch} = useContext ( ToastChunksContext )

  const handleOnClick = ( originalOnClick, actionRemove ) => () => {
    if ( typeof originalOnClick === 'function' ) {
      (originalOnClick as () => void) ();
    }
    if ( actionRemove ) {
      toastChunkDispatch ( {type: "REMOVE_TOAST", payload: {id: id}} );
    }
  };

  const renderRemoveButton = () => (
    !actions.length &&
    <button onClick={handleOnClick ( undefined, true )} className={styles.btnRemoveDefault}>
      <X size={18}/>
    </button>
  );

  return (
    <div className={classnames ( styles.wrapper, className ? {
      [ className ]: true,
      [ styles.danger ]: toastType === 'danger',
      [ styles.warning ]: toastType === 'warning',
      [ styles.success ]: toastType === 'success'
    } : "" )}>
      {renderRemoveButton ()}
      {visual}
      <div className={styles.content}>
        {text && <p>{text}</p>}
        <div className={styles.actions}>
          {actions.map ( ( {Component, type}: { Component: ReactElement, type?: "remove" } ) => {
            const originalOnClick = (Component as React.ReactElement<{ onClick?: () => void }>).props.onClick;

            return cloneElement ( Component, {
              key: generateUniqueId (),
              onClick: handleOnClick ( originalOnClick, type === "remove" )
            } );
          } )}
        </div>
      </div>
    </div>
  );
}
