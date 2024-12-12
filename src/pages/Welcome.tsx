import { Button } from "@components/common/Button";
import { ImageBackground } from "@components/ImageBackground";
import "./styles/Welcome.css";

interface Props {
    handleStartQuiz: () => void
}

export const Welcome = ({ handleStartQuiz }: Props) => {
    return (
        <div className="welcome-content">
            <section className="welcome-window">
                <div className="primary-content">
                    <div>
                        <span>How much you know about <span>Batman</span>?</span>
                        <span>Test your knowledge of the Dark Knight's universe with this quiz!</span>
                    </div>
                    <div>
                        <Button onClick={handleStartQuiz}>Start Quiz</Button>
                    </div>
                </div>
                <ImageBackground />
            </section>
        </div>
    );
}