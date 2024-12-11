import { QuizSection, Welcome } from "@pages";
import { useState } from "react";
import { Header } from "./Header";

export const Layout = () => {
    const [startQuiz, setStartQuiz] = useState(false);
    const [score, setScore] = useState(0);

    const handleStartQuiz = () => {
        setStartQuiz(!startQuiz);
    }

    const handleSetScore = (score: number) => {
        setScore(score);
    }

    return (
        <>
            <Header score={score} startQuiz={startQuiz} />
            <main>
                {
                    startQuiz
                        ? <QuizSection score={score} handleSetScore={handleSetScore} />
                        : <Welcome handleStartQuiz={handleStartQuiz} />
                }
            </main>
        </>
    );
}