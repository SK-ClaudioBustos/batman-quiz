import { Seccion, useQuizStorage } from "@src/store/quiz.store";
import { Dispatch, SetStateAction } from "react";
import { Button } from "./common/Button";

interface Props {
    actualQuestionIndex: number;
    optionSelected: number | null;
    correctOption: number;
    passQuestion: boolean;
    setActualQuestion: Dispatch<SetStateAction<number>>;
    setPassQuestion: Dispatch<SetStateAction<boolean>>;
    setOptionSelected: Dispatch<SetStateAction<number | null>>;
}

export const QuizButtons = ({ actualQuestionIndex, optionSelected, correctOption, passQuestion, setPassQuestion, setActualQuestion, setOptionSelected }: Props) => {
    const score = useQuizStorage((state) => state.score);
    const setScore = useQuizStorage((state) => state.setScore);
    const setSection = useQuizStorage((state) => state.setSection);


    const handleCheckOption = () => {
        const actualScore = (optionSelected === correctOption) ? score + 1 : score - 1;
        setScore(actualScore);
        setPassQuestion(true);
    }

    const handleResetQuiz = () => {
        setScore(0);
        setPassQuestion(false);
        setOptionSelected(null);
        setActualQuestion(0);
    }

    const handlePassToNextQuestion = () => {
        if (actualQuestionIndex === 49) {
            setSection(Seccion.SCORE);
        } else {
            const nextQuestion = actualQuestionIndex + 1;
            setActualQuestion(nextQuestion);
            setPassQuestion(false);
            setOptionSelected(null);
        }
    }

    return (
        <div className="buttons">
            <Button onClick={handleResetQuiz}>Reset Quiz</Button>
            <Button
                disabled={optionSelected !== null ? false : true}
                onClick={passQuestion ? handlePassToNextQuestion : handleCheckOption}
            >
                {actualQuestionIndex !== 50 && passQuestion ? "Next Question" : "Check Option"}
                {actualQuestionIndex === 50 && "Finish Quiz"}
            </Button>
        </div>
    );
}