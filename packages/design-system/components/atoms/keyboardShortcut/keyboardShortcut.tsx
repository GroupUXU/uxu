import classnames from 'classnames';
import { useEffect, useCallback, useMemo, useRef, isValidElement } from 'react';
import type { ReactElement } from 'react';
import { useSiteConfig } from '../../../hooks';
import type { KeyboardShortcutProps } from './types';
import styles from './keyboardShortcut.module.scss';

const MAC_SYMBOLS = { meta: '⌘', shift: '⇧', alt: '⌥', ctrl: '⌃' };
const OTHER_SYMBOLS = { meta: 'Ctrl', shift: 'Shift', alt: 'Alt', ctrl: 'Ctrl' };

export function KeyboardShortcut({ command, shift, option, ctrl, callback, children, className }: KeyboardShortcutProps): ReactElement {
  const { client } = useSiteConfig();
  const isMacOS = client?.osInfo.isMacOS;

  const pressedKeys = useRef(new Set<string>());

  const expectedKeys = useMemo(() => {
    const keys = new Set<string>();
    if (command) keys.add(isMacOS ? 'meta' : 'ctrl');
    if (shift) keys.add('shift');
    if (option) keys.add('alt');
    if (ctrl) keys.add('ctrl');
    if (children) keys.add(String(children).toLowerCase());
    return keys;
  }, [isMacOS, command, shift, option, ctrl, children]);

  const handleKeyDown = useCallback((e: KeyboardEvent): void => {
    pressedKeys.current.add(e.key.toLowerCase());

    if (Array.from(pressedKeys.current).every((key) => expectedKeys.has(key)) &&
      pressedKeys.current.size === expectedKeys.size) {
      callback();
      pressedKeys.current.clear();
    } else if (pressedKeys.current.size >= expectedKeys.size) {
      pressedKeys.current.clear();
    }
  }, [expectedKeys, callback]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  const getModifierSymbol = (key: 'meta' | 'shift' | 'alt' | 'ctrl'): ReactElement => {
    const symbols = isMacOS ? MAC_SYMBOLS : OTHER_SYMBOLS;
    return <span>{symbols[key]}{children ? " +" : ""}</span>;
  };

  return (
    <div className={classnames(styles.wrapper, className)}>
      {command !== undefined && getModifierSymbol('meta')}
      {shift !== undefined && getModifierSymbol('shift')}
      {option !== undefined && getModifierSymbol('alt')}
      {ctrl !== undefined && getModifierSymbol('ctrl')}
      <span>{children}</span>
    </div>
  );
}
