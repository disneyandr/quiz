import { useState } from "react";
import './quiz.scss'
import { resultInitalState } from "../../constants";
import TempoDeResposta from "../TempoDeResposta";

const Quiz = ({ questions }) => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answerIdx, setAnswerIdx] = useState(null);
    const [answer, setAnswer] = useState(null);
    const [result, setResult] = useState(resultInitalState);
    const [showResult, setShowResult] = useState(false);
    const [showAnswerTimer, setShowAnswerTimer] = useState(true);
    const { question, choices, correctAnswer } = questions[currentQuestion];

    const onAnswerClick = (answer, index) => {
        setAnswerIdx(index);
        if (answer === correctAnswer) {
            setAnswer(true);
        } else {
            setAnswer(false);
        }
    };

    const onClickNext = (finalAnswer) => {
        setAnswerIdx(null);
        setShowAnswerTimer(false);
        setResult((prev) =>
        finalAnswer
                ? {
                    ...prev,
                    score: prev.score + 9,
                    correctAnswers: prev.correctAnswers + 1,
                }
                : {
                    ...prev,
                    wrongAnswers: prev.wrongAnswers + 1,
                }
        );
        //conferir
        if (currentQuestion !== questions.length - 1) {
            setCurrentQuestion((prev) => prev + 1);
        } else {
            setCurrentQuestion(0);
            setShowResult(true);
        }

        setTimeout(() => {
            setShowAnswerTimer(true);
        })
    }
    const onTryAgain = () =>{
        setResult(resultInitalState);
        setShowResult(false);
    }
    const handleTimeUp = () => {
        setAnswer(false);
        onClickNext(false);
    }
    return (
        <div className="quiz-container">
            {!showResult ? (
                <>
                {showAnswerTimer && <TempoDeResposta duration={20} onTimeUp={handleTimeUp}/>}
                    <span className="active-question-no">
                        {currentQuestion + 1}
                    </span>
                    <span className="total-question">
                        /{questions.length}
                    </span>
                    <h2>{question}</h2>
                    <ul>
                        {
                            choices.map((choice, index) => (
                                <li
                                    onClick={() => onAnswerClick(choice, index)}
                                    key={choice}
                                    className={answerIdx === index ? 'selected-answer' : null}
                                >
                                    {choice}
                                </li>
                            ))
                        }
                    </ul>
                    <div className="footer">
                        <button 
                            onClick={() => onClickNext(answer)} 
                            disabled={answerIdx === null}
                        >
                            {currentQuestion === questions.length - 1 ? "Final" : "Próximo"}
                        </button>
                    </div>
                </>

            ) : (<div className="result">
                <h3>Resultado</h3>
                <p>
                    Total de perguntas: <span>{questions.length}</span>
                </p>
                <p>
                    Total de pontos: <span>{result.score}</span>
                </p>
                <p>
                    Respostas corretas: <span>{result.correctAnswers}</span>
                </p>
                <p>
                    Respostas erradas: <span>{result.wrongAnswers}</span>
                </p>
                <button onClick={onTryAgain}>Tente outra vez</button>
            </div>
            )}

        </div>
    )
}

export default Quiz;