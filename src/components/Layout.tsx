import { Welcome } from "@pages";
import { Seccion, useQuizStorage } from "@src/store/quiz.store";
import { lazy, ReactNode, Suspense } from "react";
import { Header } from "./Header";
const QuizSection = lazy(() => import('@src/pages/QuizSection'));
const Score = lazy(() => import("@src/pages/Score"));

const SECTIONS: Record<Seccion, ReactNode> = {
    "Welcome": <Welcome />,
    "Quiz": <Suspense fallback={<>CARGANDO</>}><QuizSection /></Suspense>,
    "Score": <Suspense fallback={<>CARGANDO</>}><Score /></Suspense>
};

export const Layout = () => {
    const section = useQuizStorage((state) => state.section);
    return (
        <>
            <Header />
            <main>
                {SECTIONS[section]}
            </main>
        </>
    );
}