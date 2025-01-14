import { Seccion, useQuizStorage } from "@src/store/quiz.store";
import BatmanLogo from "@icons/batman_logo.svg?react";
import "./styles/Header.css";

export const Header = () => {
    const section = useQuizStorage((state) => state.section);
    const score = useQuizStorage((state) => state.score);

    return (
        <header>
            <div className="header-logo">
                <h3>
                    Batman Quiz
                </h3>
                <BatmanLogo width={30} height={20}/>
            </div>

            {
                section === Seccion.QUIZ && (
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