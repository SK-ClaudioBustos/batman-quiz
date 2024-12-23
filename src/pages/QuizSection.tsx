import { Option } from "@components/Option";
import { Button } from "@components/common/Button";
import { questions } from "@data/questions";
import { useQuizStorage } from "@src/store/quiz.store";
import { useState } from "react";
import "./styles/QuizSection.css";

export default function QuizSection() {
    const score = useQuizStorage((state) => state.score);
    const setScore = useQuizStorage((state) => state.setScore);
    const [optionSelected, setOptionSelected] = useState<number | null>(null);
    const [actualQuestion, setQuestion] = useState(0);
    const [passQuestion, setPassQuestion] = useState(false);
    const correctOption = questions[actualQuestion].correct_option;

    const handleSelectedOption = (optionSelected: number) => {
        setOptionSelected(optionSelected);
    }

    const handleCheckOption = () => {
        const actualScore = (optionSelected === correctOption) ? score + 1 : score - 1;
        setScore(actualScore);
        setPassQuestion(true);
    }

    const handleResetQuiz = () => {
        setScore(0);
        setPassQuestion(false);
        setOptionSelected(null);
        setQuestion(0);

    }

    const handlePassToNextQuestion = () => {
        if (actualQuestion === 50) {
            // TODO finish quiz
        } else {
            setQuestion(actualQuestion + 1);
            setPassQuestion(false);
            setOptionSelected(null);
        }
    }

    return (
        <section className="quiz">
            <div className="container-question">
                <p className="actual-quiz">{`${actualQuestion + 1}/50`}</p>
                <div className="question">
                    <p>
                        {
                            questions[actualQuestion].question
                        }
                    </p>
                </div>
            </div>
            <div>
                <div className="container-options">
                    <span>Select a Option</span>
                    <ul className="options">
                        {
                            questions[actualQuestion].options.map((option, index) => (
                                <Option
                                    correctOption={correctOption}
                                    optionSelected={optionSelected}
                                    key={index}
                                    label={option}
                                    value={index}
                                    passQuestion={passQuestion}
                                    onSelectedOption={handleSelectedOption}
                                />
                            ))
                        }
                    </ul>
                </div>
                <div className="buttons">
                    <Button width="150px" onClick={handleResetQuiz}>Reset Quiz</Button>
                    <Button
                        disabled={optionSelected !== null ? false : true}
                        width="150px"
                        onClick={passQuestion ? handlePassToNextQuestion : handleCheckOption}
                    >
                        {passQuestion ? "Next Question" : "Check Option"}
                    </Button>
                </div>
            </div>
        </section>
    );
}