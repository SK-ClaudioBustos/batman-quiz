import { BrowserRouter, Route, Routes } from "react-router";
import { Layout } from "./Layout";
import { Welcome } from "@src/pages";
import Quiz from "@src/pages/Quiz";
import Score from "@src/pages/Score";


export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<Welcome/>} />
                    <Route path="/quiz" element={<Quiz/>} />
                    <Route path="/score" element={<Score/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}