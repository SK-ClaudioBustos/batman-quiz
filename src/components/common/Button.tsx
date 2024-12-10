import { ReactNode } from "react";
import style from "./styles/Button.module.css";

type Color = `#${string}`;

interface Params {
    children: ReactNode;
    color?: Color;
    onClick?: () => void;
}

export const Button = ({ children, color = "#f1f1f1", onClick }: Params) => {
    return (
        <button type="button" style={{ color: color }} className={style["button"]} onClick={onClick ?? undefined}>
            {children}
        </button>
    );
}