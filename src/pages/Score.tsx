import { Button } from "@src/components/common/Button";
import { getQuizLegend } from "@src/functions/functions";
import { useQuizStorage } from "@src/store/quiz.store";
import { useNavigate } from "react-router";
import "./styles/Score.css";

export default function Score() {
    const score = useQuizStorage((state) => state.score);
    const setScore = useQuizStorage((state) => state.setScore);
    const navigate = useNavigate();
    
    const handleResetQuiz = () => {
        setScore(0);
        navigate("/quiz");
    }
    
    return (
        <section className="container-center score-container">
            <div className="score-content">
                <div className="score-box">
                    <h1>{`Your Final Score is ${score}`}</h1>
                    <p>{`${getQuizLegend(score)}`}</p>
                </div>
                <Button onClick={handleResetQuiz}>Reset Quiz</Button>
            </div>
        </section>
    );
}