import { QuestionData } from "@src/data/questions";
import { Option } from "./Option";
import { Dispatch, SetStateAction } from "react";

interface Props {
    actualQuestion: QuestionData;
    optionSelected: number | null;
    correctOption: number;
    passQuestion: boolean;
    setOptionSelected: Dispatch<SetStateAction<number | null>>;
}

export const QuizOptionsBox = ({ actualQuestion, optionSelected, correctOption, passQuestion, setOptionSelected }: Props) => {
    const handleSelectedOption = (optionSelected: number) => {
        setOptionSelected(optionSelected);
    }
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
                            correctOption={correctOption}
                            optionSelected={optionSelected}
                            passQuestion={passQuestion}
                            onSelectedOption={handleSelectedOption}
                        />
                    ))
                }
            </ul>
        </div>
    );
}