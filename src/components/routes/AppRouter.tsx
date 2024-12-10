import { Welcome } from "@pages";
import { BrowserRouter, Navigate, Route } from "react-router";
import { RoutesWithNotFound } from "./RoutesWithNotFound";

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <RoutesWithNotFound>
                <Route path="/" element={<Navigate to={"/welcome"} />} />
                <Route path="/welcome" element={<Welcome />} />
            </RoutesWithNotFound>
        </BrowserRouter>
    );
}