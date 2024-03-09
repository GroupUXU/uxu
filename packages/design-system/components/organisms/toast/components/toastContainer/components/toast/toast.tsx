import {useCallback, cloneElement} from "react";
import type {ReactElement} from 'react';
import {X} from 'react-feather';
import classnames from "classnames";
import {generateUniqueId} from "utils";
import type {ToastProps} from "utils";
import styles from './toast.module.scss';

export function Toast({
                          id,
                          text,
                          visual,
                          actions = [],
                          className,
                          toastChunkDispatch,
                          type: toastType
                      }: ToastProps): ReactElement {

    const handleOnClick = useCallback((originalOnClick?: () => void, actionRemove?: boolean) => {
        return () => {
            if (typeof originalOnClick === 'function') {
                originalOnClick();
            }
            if (actionRemove) {
                toastChunkDispatch({type: "REMOVE_TOAST", payload: {id}});
            }
        };
    }, [id, toastChunkDispatch]);

    function renderRemoveButton(): ReactElement | null {
        if (!actions.length) {
            return (
                <button
                    aria-label="clouse"
                    className={styles.btnRemoveDefault}
                    onClick={handleOnClick(undefined, true)}
                    type="button"
                >
                    <X size={18}/>
                </button>
            );
        }
        return null;
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
                <p className={styles.text}>{text}</p>
                <div className={styles.actions}>
                    {actions.map(({Component, type}) => {
                        const originalOnClick = (Component as ReactElement<{ onClick?: () => void }>).props.onClick;

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
