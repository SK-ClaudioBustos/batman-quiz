import { QuestionData } from "@src/data/questions";
import { Option } from "./Option";

interface Props {
    actualQuestion: QuestionData;
    optionSelected: number | null;
    correctOption: number;
    passQuestion: boolean;
    handleOptionSelected: (value: number) => void;
}

export const QuizOptionsBox = ({ actualQuestion, optionSelected, correctOption, passQuestion, handleOptionSelected }: Props) => {

    return (
        <div className="container-options">
            <span>Select a Option</span>
            <ul className="options">
                {
                    actualQuestion.options.map((option, index) => (
                        <Option
                            key={index}
                            label={option}
                            value={index}
                            isCorrectOption={correctOption === index}
                            passQuestion={passQuestion}
                            isOptionSelected={optionSelected === index}
                            handleOptionSelected={handleOptionSelected}
                        />
                    ))
                }
            </ul>
        </div>
    );
}