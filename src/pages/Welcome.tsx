import { Button } from "@components/common/Button";
import "./styles/Welcome.css";

export const Welcome = () => {
    return (
        <div className="welcome-content">
            <section className="welcome-window">
                <div className="primary-content">
                    <div>
                        <h1>How much you know about <span>Batman</span>?</h1>
                        <h4>Test your knowledge of the Dark Knight's universe with this quiz!</h4>
                    </div>
                    <div>
                        <Button>Start Quiz</Button>
                    </div>
                </div>
                <div className="img-background">
                    <img src={"src/img/background.jpg"} alt="batman image" />
                </div>
            </section>
        </div>
    );
}