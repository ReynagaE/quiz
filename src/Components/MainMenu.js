import React from "react";
import { useContext } from "react";
import { QuizContext } from "../Helpers/Contexts";
import "../App.css";

export default function MainMenu() {
    const {gameState, setGameState} = useContext(QuizContext);
    return (
        <div className="Menu">
            <h1>JavaScript Quiz</h1>
            <button 
                onClick={() => {
                    setGameState('quiz');
                }}
            >
                Start Quiz
            </button>
        </div>
    )
}