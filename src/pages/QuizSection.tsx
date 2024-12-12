import { Button } from "@components/common/Button";
import { Option } from "@components/Option";
import { questions } from "@data/questions";
import { useState } from "react";
import "./styles/QuizSection.css";

interface Props {
    score: number
    handleSetScore: (score: number) => void
}

export const QuizSection = ({ score, handleSetScore }: Props) => {
    const [optionSelected, setOptionSelected] = useState<number | null>(null);
    const [actualQuestion, setQuestion] = useState(0);
    const [passQuestion, setPassQuestion] = useState(false);
    const correctOption = questions[actualQuestion].correct_option;

    const handleSelectedOption = (optionSelected: number) => {
        setOptionSelected(optionSelected);
    }

    const handleCheckOption = () => {
        const actualScore = (optionSelected === correctOption) ? score + 1 : score - 1;
        handleSetScore(actualScore);
        setPassQuestion(true);
    }

    const handleResetQuiz = () => {
        handleSetScore(0);
        setPassQuestion(false);
        setOptionSelected(null);
        setQuestion(1);

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
                    width="150px"
                    onClick={passQuestion ? handlePassToNextQuestion : handleCheckOption}
                >
                    {passQuestion ? "Next Question" : "Check Option"}
                </Button>
            </div>
        </section>
    );
}