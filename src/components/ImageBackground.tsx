import { useState } from "react";
import "./styles/ImageBackground.css";

export const ImageBackground = () => {
    const [isLoading, setIsLoading] = useState(true);

    const handleImageLoad = () => {
        setIsLoading(false);
    };

    return (
        <div className="img-background">
            {isLoading && (
                <div className="container-center">
                    <h1>LOADING</h1>
                </div>
            )}
            <img
                src={"src/img/background.jpg"}
                alt="batman image"
                onLoad={handleImageLoad}
                style={{ display: isLoading ? "none" : "block" }}
            />
        </div>
    );
};
