import { current } from 'immer'
import React, { useEffect, useState } from 'react'

const Form = ({ questions }) => {
    const [answers, setAnswers] = useState([])
    const [score, setScore] = useState(0)
    const [currentQuestion, setCurrentQuestion] = useState(0)

    const handleAnswerChange =(index, event)=> {
        const newAnswers = [...answers];

        newAnswers[index] = event.target.value

        setAnswers(newAnswers)

        // setCurrentQuestion(currentQuestion + 1)
    }

    const handleSubmit =(e)=> {
        e.preventDefault();
        let newScore = 0
        for(let i = 0; i < questions.length; i++) {
            if(answers[i] === questions[i].correct_answer) {
                newScore++
            }

        }
        setScore(newScore)

        console.log(answers, newScore);
    }

    const handleRestart =()=> {
        setCurrentQuestion(0);
        setScore(0)
    }

    useEffect(() => {
        setAnswers(Array(questions.length).fill(''));
    }, [questions])

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <h2>Here's Your Quiz</h2>

            <span>Score: {score}</span>
            <button type='button' onClick={handleRestart}>Restart</button>

            {questions.map((question, index) => (
                <div className={currentQuestion === index ? 'show' : 'hide'}>
                    <p>{index + 1}. {question.question}</p>
                    <div className="answers-div">
                        <input type='radio' name={index + 1} value={question.correct_answer} onChange={(e) => handleAnswerChange(index, e)} />
                        <label htmlFor="">{question.correct_answer}</label>
                    </div>
                    { question.incorrect_answers.map(ans => (
                        <div className="answers-div">
                            <input type='radio' name={index + 1} value={ans} onChange={(e) => handleAnswerChange(index, e)}/>
                            <label htmlFor="">{ans}</label>
                        </div>
                    ))}
                    <button type='button' onClick={() => {setCurrentQuestion(currentQuestion + 1)}}>next</button>
                </div>
            ))}
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default Form