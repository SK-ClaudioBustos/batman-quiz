import { Button } from "@components/common/Button";

interface Props {
    handleStartQuiz: () => void
}

export const QuizSection = ({ handleStartQuiz }: Props) => {
    return (
        <>
            <Button onClick={handleStartQuiz}>Cancel Quiz</Button>
        </>
    );
}