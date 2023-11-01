import { cloneElement } from "react";
import type { ReactElement } from "react";
import { X } from 'react-feather';
import type { ToastProps } from "utils";
import { generateUniqueId } from "utils";
import classnames from "classnames";
import styles from './toast.module.scss';

export function Toast({ id, text, visual, actions = [], className, toastChunkDispatch,  type: toastType }: ToastProps): ReactElement {
  const handleOnClick = (originalOnClick, actionRemove) => (): void => {
    if (typeof originalOnClick === 'function') {
      (originalOnClick as () => void)();
    }
    if (actionRemove) {
      toastChunkDispatch({ type: "REMOVE_TOAST", payload: { id } });
    }
  };

  function renderRemoveButton(): ReactElement | null {
    if(!actions.length) {
      return (
        <button className={styles.btnRemoveDefault} onClick={handleOnClick ( undefined, true )} type="button">
          <X size={18}/>
        </button>
      )
    }
    return null
  }

  const classNameForType = {
    [styles.danger]: toastType === 'danger',
    [styles.warning]: toastType === 'warning',
    [styles.success]: toastType === 'success'
  };

  return (
    <div className={classnames(styles.wrapper, className, classNameForType)}>
      {renderRemoveButton()}
      {visual}
      <div className={styles.content}>
        <p>{text}</p>
        <div className={styles.actions}>
          {actions.map(({ Component, type }: { Component: ReactElement, type?: "remove" }) => {
            const originalOnClick = (Component as React.ReactElement<{ onClick?: () => void }>).props.onClick;

            return cloneElement(Component, {
              key: generateUniqueId(),
              onClick: handleOnClick(originalOnClick, type === "remove")
            });
          })}
        </div>
      </div>
    </div>
  );
}
