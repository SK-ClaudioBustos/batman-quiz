import BatmanLogo from "@icons/batman_logo.svg?react";
import { useQuizStorage } from "@src/store/quiz.store";
import { useLocation } from "react-router";
import "./styles/Header.css";

export const Header = () => {
    const score = useQuizStorage((state) => state.score);
    const section = useLocation().pathname;
    return (
        <header>
            <div className="header-logo">
                <h3>
                    Batman Quiz
                </h3>
                <BatmanLogo width={30} height={20} />
            </div>
            {
                section === "/quiz" && (
                    <div className="score">
                        <span>
                            {`Score ${score}`}
                        </span>
                    </div>
                )
            }
        </header>
    );
}