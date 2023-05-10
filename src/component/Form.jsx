import React, { useEffect, useState } from 'react'

const Form = ({ questions,status }) => {
    const [answers, setAnswers] = useState([])
    const [score, setScore] = useState(0)
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [showScore, setShowScore] = useState(false);

    const handleAnswerChange =(index, event)=> {
        const newAnswers = [...answers];
        newAnswers[index] = event.target.value
        setAnswers(newAnswers)
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
        setShowScore(true)
    }

    const handleRestart =()=> {
        setCurrentQuestion(0);
        setScore(0)
        setShowScore(false)
    }

    useEffect(() => {
        setAnswers(Array(questions.length).fill(''));
    }, [questions])

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div className='flex'>
                <h2>Here's Your Quiz</h2>
                <button type='button' onClick={handleRestart}>Restart</button>
            </div>

            {questions.map((question, index) => (
                <div className={currentQuestion === index ? 'show' : 'hide'}>
                    <p className='question'>Question {index + 1}. {question.question}</p>
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
                </div>
            ))}
            <div>
                { currentQuestion === questions.length ?  
                <button type='submit'>Submit</button> :
                <button type='button' style={{marginTop: 20}} onClick={() => {setCurrentQuestion(currentQuestion + 1)}}>next</button>
                }
            </div>
        </form>
        {showScore ? <h1>Score: {score}/{questions.length}</h1> : ''}
    </div>
  )
}

export default Form