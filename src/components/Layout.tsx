import { Outlet } from "react-router";
import { Header } from "./Header";

export const Layout = () => {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
        </>
    );
}