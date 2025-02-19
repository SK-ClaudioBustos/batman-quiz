import "./styles/Option.css";

interface Props {
    label: string;
    value: number;
    isCorrectOption: boolean;
    isOptionSelected: boolean;
    passQuestion: boolean;
    handleOptionSelected: (value: number) => void;
}

export const Option = ({ label, value, isCorrectOption, passQuestion, isOptionSelected, handleOptionSelected }: Props) => {
    const handleOnSelect = () => handleOptionSelected(value);
    const classes = `
        option ${isOptionSelected ? "selected" : "no-selected"} 
        ${passQuestion && !isOptionSelected && "disabled"}
        ${passQuestion && isCorrectOption && isOptionSelected && "correct"}
        ${passQuestion && !isCorrectOption && isOptionSelected && "incorrect"}
    `;
    return (
        <li
            onClick={handleOnSelect}
            className={classes}
        >
            <span>{label}</span>
            {
                passQuestion && (
                    <p>
                        {
                            isCorrectOption ? "Correct" : "Incorrect"
                        }
                    </p>
                )
            }
        </li>
    );
}