import { CSSProperties, ReactNode } from "react";
import style from "./styles/Button.module.css";

type Color = `#${string}`;

interface Params {
    children: ReactNode;
    disabled?: boolean;
    color?: Color;
    onClick?: () => void;
}

export const Button = ({ children, disabled = false, color = "#f1f1f1", onClick }: Params) => {
    return (
        <>
            {
                disabled
                    ? (<button disabled type="button" style={{ "--c": color } as CSSProperties} className={style["button"]} onClick={onClick ?? undefined}>
                        {children}
                    </button>)
                    : (<button type="button" style={{ "--c": color } as CSSProperties} className={style["button"]} onClick={onClick ?? undefined}>
                        {children}
                    </button>)
            }
        </>
    );
}