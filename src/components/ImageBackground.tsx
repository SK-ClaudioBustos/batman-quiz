import { useState } from "react";
import { Loading } from "./common/Loading";
import "./styles/ImageBackground.css";

export const ImageBackground = () => {
    const [isLoading, setIsLoading] = useState(true);

    const handleImageLoad = () => {
        setIsLoading(false);
    };

    return (
        <div className="img-background">
            {isLoading && <Loading />}
            <img
                src={"src/img/background.avif"}
                alt="batman image"
                onLoad={handleImageLoad}
                style={{ display: isLoading ? "none" : "block" }}
            />
        </div>
    );
};
