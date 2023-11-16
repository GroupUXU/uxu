import { useCallback } from "react";
import type { ReactElement } from "react";
import { Sun, Moon } from 'react-feather';
import classnames from 'classnames';
import { useSiteConfig } from "../../../hooks/useSiteConfig";
import { useTheme } from "../../../hooks/useTheme";
import styles from './themeSwitcher.module.scss';

export function ThemeSwitcher(): ReactElement {
  const { setTheme } = useTheme();
  const { config: { site }} = useSiteConfig();

  const toggleTheme = useCallback((theme: 'dark' | 'light'): void  => {
    theme !== site?.theme && setTheme(theme);
  }, [setTheme, site]);

  return (
    <div className={classnames(styles.wrraper, { [styles.dark]: site?.theme === "dark" })}>
      <button
        className={styles.button}
        onClick={() => {
          toggleTheme('light');
        }}
        type="button"
      >
        <Sun size={18} />
      </button>
      <button
        className={styles.button}
        onClick={() => {
          toggleTheme('dark');
        }}
        type="button"
      >
        <Moon size={18} />
      </button>
    </div>
  );
}
