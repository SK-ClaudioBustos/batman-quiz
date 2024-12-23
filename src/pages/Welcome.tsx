import { Button } from "@components/common/Button";
import { PixelArt } from "@components/common/PixelArt";
import { BATMAN_ART, BATMAN_COLORS } from "@data/batman_art";
import { JOKER_ART, JOKER_COLORS } from "@data/joker_art";
import "./styles/Welcome.css";
import { useQuizStorage } from "@src/store/quiz.store";

export const Welcome = () => {
    const setShowQuiz = useQuizStorage((state) => state.setShowQuiz);
    
    return (
        <div className="welcome-content">
            <section className="welcome-window">
                <div className="primary-content">
                    <div>
                        <span>How much you know about <span>Batman</span>?</span>
                        <span>Test your knowledge of the Dark Knight's universe with this quiz!</span>
                    </div>
                    <div>
                        <PixelArt colors={JOKER_COLORS} id="joker" rotateGrads="-5deg" translateX="-10px" translateY="22px" pixelArt={JOKER_ART} />
                        <PixelArt colors={BATMAN_COLORS} id="batman" rotateGrads="5deg" translateX="22px" translateY="-10px" pixelArt={BATMAN_ART} />
                    </div>
                    <div>
                        <Button onClick={() => setShowQuiz(true)}>Start Quiz</Button>
                    </div>
                </div>
            </section>
        </div>
    );
}