import { ReactNode } from "react";
import style from "./styles/Button.module.css";

type Color = `#${string}`;

interface Params {
    children: ReactNode;
    disabled?: boolean;
    width?: string;
    color?: Color;
    onClick?: () => void;
}

export const Button = ({ children, disabled = false, width = "fit-content", color = "#f1f1f1", onClick }: Params) => {
    return (
        <>
            {
                disabled
                    ? (<button disabled type="button" style={{ color, width }} className={style["button"]} onClick={onClick ?? undefined}>
                        {children}
                    </button>)
                    : (<button type="button" style={{ color, width }} className={style["button"]} onClick={onClick ?? undefined}>
                        {children}
                    </button>)
            }
        </>
    );
}