
export type ColorShiftTextAnimatorProps = {
    className?: string;
    headerTagHtml?: keyof JSX.IntrinsicElements;
    header: [string, string] | [string, string, string],
    description?: string;
}