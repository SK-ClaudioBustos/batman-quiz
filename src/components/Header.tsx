import { Seccion, useQuizStorage } from "@src/store/quiz.store";
import "./styles/Header.css";

export const Header = () => {
    const section = useQuizStorage((state) => state.section);
    const score = useQuizStorage((state) => state.score);

    return (
        <header>
            <h3>
                Batman Quiz
            </h3>
            {
                section === Seccion.QUIZ && (
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