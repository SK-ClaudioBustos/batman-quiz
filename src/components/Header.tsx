import { useQuizStorage } from "@src/store/quiz.store";
import "./styles/Header.css";

export const Header = () => {
    const startQuiz = useQuizStorage((state) => state.showQuiz);
    const score = useQuizStorage((state) => state.score);

    return (
        <header>
            <h3>
                Batman Quiz
            </h3>
            {
                startQuiz && (
                    <div className="score">
                        <span>
                            {`Score ${score}`}
                        </span>
                    </div>
                )
            }
        </header>
    );
}