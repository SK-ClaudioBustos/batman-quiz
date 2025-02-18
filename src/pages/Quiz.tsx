import { questions } from "@data/questions";
import { QuizButtons } from "@src/components/QuizButtons";
import { QuizOptionsBox } from "@src/components/QuizOptionsBox";
import { useState } from "react";
import "./styles/QuizSection.css";

export default function Quiz() {
    const [actualQuestionIndex, setActualQuestionIndex] = useState(0);
    const [optionSelected, setOptionSelected] = useState<number | null>(null);
    const [passQuestion, setPassQuestion] = useState(false);
    const correctOption = actualQuestionIndex !== 50 ? questions[actualQuestionIndex].correct_option : 0;

    const handleOptionSelected = (value: number) => {
        if (!passQuestion) setOptionSelected(value);
    }

    return (
        <section className="quiz">
            <div className="container-question">
                <p className="actual-quiz">{`${actualQuestionIndex + 1}/50`}</p>
                <div className="question">
                    <p>
                        {
                            questions[actualQuestionIndex].question
                        }
                    </p>
                </div>
            </div>
            <div>
                <QuizOptionsBox
                    passQuestion={passQuestion}
                    actualQuestion={questions[actualQuestionIndex]}
                    correctOption={correctOption}
                    optionSelected={optionSelected}
                    handleOptionSelected={handleOptionSelected}                    
                />
                <QuizButtons
                    actualQuestionIndex={actualQuestionIndex}
                    correctOption={correctOption}
                    optionSelected={optionSelected}
                    passQuestion={passQuestion}
                    setOptionSelected={setOptionSelected}
                    setActualQuestion={setActualQuestionIndex}
                    setPassQuestion={setPassQuestion} />
            </div>
        </section>
    );
}