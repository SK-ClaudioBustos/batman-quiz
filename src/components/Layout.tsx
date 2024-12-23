import { Welcome } from "@pages";
import { lazy, Suspense } from "react";
import { Header } from "./Header";
import { useQuizStorage } from "@src/store/quiz.store";
const QuizSection = lazy(() => import('@src/pages/QuizSection'));

export const Layout = () => {
    const startQuiz = useQuizStorage((state) => state.showQuiz);
    return (
        <>
            <Header />
            <main>
                {
                    startQuiz
                        ? (
                            <Suspense fallback={<>CARGANDO</>}>
                                <QuizSection />
                            </Suspense>
                        )
                        : <Welcome />
                }
            </main>
        </>
    );
}