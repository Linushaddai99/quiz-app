import React from 'react'

const Form = ({ questions }) => {
  return (
    <div>
        <form action="">
            <h2>Here's Your Quiz</h2>
            {questions.map((question) => (
                <div>
                    <p>{questions.indexOf(question) + 1}. {question.question}</p>
                    <div className="answers-div">
                        <input type='radio' name={questions.indexOf(question) + 1} />
                        <label htmlFor="">{question.correct_answer}</label>
                    </div>
                    { question.incorrect_answers.map(ans => (
                        <div className="answers-div">
                            <input type='radio' name={questions.indexOf(question) + 1} />
                            <label htmlFor="">{ans}</label>
                        </div>
                    ))}
                    
                </div>
            ))}
        </form>
    </div>
  )
}

export default Form