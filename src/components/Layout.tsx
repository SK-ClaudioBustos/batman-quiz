import { Welcome } from "@pages";
import { useState } from "react";
import { QuizSection } from "@pages";
import { Header } from "./Header";

export const Layout = () => {
    const [startQuiz, setStartQuiz] = useState(false);
    const [score, setScore] = useState(0);

    const handleStartQuiz = () => {
        setStartQuiz(!startQuiz);
    }
    return (
        <>
            <Header score={score} startQuiz={startQuiz} />
            <main>
                {
                    startQuiz
                        ? <QuizSection handleStartQuiz={handleStartQuiz} />
                        : <Welcome handleStartQuiz={handleStartQuiz} />
                }
            </main>
        </>
    );
}