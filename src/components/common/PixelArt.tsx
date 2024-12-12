import { useCallback, useEffect } from "react";
import style from "./styles/PixelArt.module.css";

interface Props {
    id: string;
    translateX: string;
    translateY: string;
    colors: Record<number, string>;
    rotateGrads: string;
    pixelArt: number[];
}

export const PixelArt = ({ id, translateX, translateY, colors, rotateGrads, pixelArt }: Props) => {

    const generatePixelArt = useCallback(() => {
        const FrameElement = document.getElementById(id);
        const boxShadow = pixelArt.map((pixel, index) => {
            const num = 16;
            const x = num * (index % num);
            const y = num * ~~(index / num);
            return `${x}px ${y}px ${colors[pixel]}`;
        }).join(",\n");

        if (FrameElement) {
            FrameElement.style.setProperty("--shadow", boxShadow);
        }
    }, [id, colors, pixelArt]);

    useEffect(() => {
        generatePixelArt();
    }, []);
    return (
        <div
            id={id}
            className={style["frame"]}
            style={{ "--rotate": rotateGrads, "--tX": translateX, "--tY": translateY, margin: "0 auto" } as React.CSSProperties}
        >
            <div className={style["pixel"]}></div>
        </div>
    );
}