import { useState } from "react";
import type { PropsWithChildren, ReactElement } from 'react'
import { ArrowDown, ArrowUp } from 'react-feather'
import type { CollapseProps } from "./types";
import styles from './collapse.module.scss';

export function Collapse( {children, label, isOpen, onClick, className, ...args}: CollapseProps ): ReactElement {
  return (
    <div className={`${styles.collapseComponent} ${isOpen ? styles.open : ""} ${className ? className : ""}`} {...args}>
      <div className={styles.collapseContent}>
        <button
          className={styles.collapseButton}
          onClick={onClick}
          style={{fontWeight: `${label.bold ? "bold" : "normal"}`}}
          type="button"
        >
          {label.title} {isOpen ? <ArrowUp size={20}/> : <ArrowDown size={20}/>}
        </button>
        {children}
      </div>
    </div>
  );
};

type ItemProps = PropsWithChildren<{
  id: string;
  className?: string;
  label: { title: string, bold?: boolean };
}>

type CollapseGroupProps = PropsWithChildren<{
  items: Array<ItemProps>;
  initialOpenIndex?: number;
}>

export function CollapseGroup( {items, initialOpenIndex}: CollapseGroupProps ): ReactElement {
  const [openIndex, setOpenIndex] = useState<number | null> ( initialOpenIndex || null );

  return (
    <>
      {items.map((item, index) => (
        <Collapse
          {...item}
          isOpen={openIndex === index}
          key={item.id}
          onClick={() => { setOpenIndex(openIndex === index ? null : index)}}
        >
          {item.children}
        </Collapse>
      ))}
    </>
  );
};
