import { Button } from "@src/components/common/Button";
import { getQuizLegend } from "@src/functions/functions";
import { Seccion, useQuizStorage } from "@src/store/quiz.store";
import "./styles/Score.css";

export default function Score() {
    const setSection = useQuizStorage((state) => state.setSection);
    const score = useQuizStorage((state) => state.score);
    const setScore = useQuizStorage((state) => state.setScore);

    const handleResetQuiz = () => {
        setScore(0);
        setSection(Seccion.QUIZ)
    }
    return (
        <section className="container-center score-container">
            <div className="score-content">
                <div className="score-box">
                    <h1>{`Your Final Score is ${score}`}</h1>
                    <p>{`${getQuizLegend(score)}`}</p>
                </div>
                <Button width="150px" onClick={handleResetQuiz}>Reset Quiz</Button>
            </div>
        </section>
    );
}