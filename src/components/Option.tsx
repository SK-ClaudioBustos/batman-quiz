import "./styles/Option.css";

interface Props {
    label: string
    value: number
    correctOption: number
    optionSelected: number | null
    passQuestion: boolean
    onSelectedOption: (optionSelected: number) => void
}

export const Option = ({ label, value, correctOption, optionSelected, passQuestion, onSelectedOption: onSelected }: Props) => {

    const handleSelected = () => {
        if (!passQuestion) onSelected(value);
    }

    return (
        <li
            onClick={handleSelected}
            className={`option ${optionSelected === value ? "selected" : "no-selected"} ${(value !== correctOption && passQuestion) ? "disabled" : "enabled"}`}
        >
            <span>{label}</span>
            {
                passQuestion && (value === correctOption) && <span className="correct-option">Correct option</span>
            }
        </li>
    );
}