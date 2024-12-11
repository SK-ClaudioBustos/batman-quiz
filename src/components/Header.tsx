import "./styles/Header.css";

export const Header = ({ startQuiz, score = 0 }: { startQuiz: boolean, score: number }) => {
    return (
        <header>
            <h3>
                Batman Quiz
            </h3>
            {
                startQuiz && (
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