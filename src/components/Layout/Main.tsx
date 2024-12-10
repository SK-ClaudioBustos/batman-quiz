import { Button } from "@components/common/Button";
import "./styles/Main.css";

export const Main = () => {
    return (
        <main>
            <section className="welcome-window">
                <div className="primary-content">
                    <div>
                        <h1>How much you know about Batman?</h1>
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
        </main>
    );
}