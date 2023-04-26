import { useState, useContext } from "react";
import React from "react";
import {Questions} from '../Helpers/QuestionBank';
import { QuizContext } from "../Helpers/Contexts";

function Quiz() {
    const {score, setScore, setGameState} = useContext(QuizContext);
    const [currQuestion, setCurrQuestion] = useState(0);
    const [optionChosen, setOptionChosen] = useState('');
    const nextQuestion = () => {
        if (Questions[currQuestion].answer === optionChosen) {
            setScore(score + 1);
        }
        setCurrQuestion(currQuestion + 1);
    };

    const finishQuiz = () => {
        if (Questions[currQuestion].answer === optionChosen) {
            setScore(score + 1);
        }
        setGameState('endScreen');
    };

    return <div className="Quiz">
        <h1>{Questions[currQuestion].prompt}</h1>
        <div className="options">
            <button className="optionButton" onClick={() => setOptionChosen('A')}>{Questions[currQuestion].optionA}</button>
            <button className="optionButton" onClick={() => setOptionChosen('B')}>{Questions[currQuestion].optionB}</button>
            <button className="optionButton" onClick={() => setOptionChosen('C')}>{Questions[currQuestion].optionC}</button>
            <button className="optionButton" onClick={() => setOptionChosen('D')}>{Questions[currQuestion].optionD}</button>
        </div>

        {currQuestion === Questions.length - 1 ? (
            <button className="finishButton" onClick={finishQuiz}>Finish Quiz</button>
        ) : (
            <button className="nextQuestion" onClick={nextQuestion}>Next Question</button>
        )}
    </div>;
}

export default Quiz;