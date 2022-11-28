import React, {useState} from 'react'

import './index.css'

const questions = [
    {
        title: 'What is ReactJS?',
        answerOptions: [
            'Server-side Framework',
            'User-interface framework',
            'A Library for building interaction interfaces',
            'None of the Above',
        ],
        correct: 2,
    },
    {
        title: 'Everything in React is a ______',
        answerOptions: [
            'Module',
            'Component',
            'Package',
            'Class',
        ],
        correct: 1,
    },
    {
        title: 'What is Babel?',
        answerOptions: [
            'A transpiler',
            'An interpreter',
            'A Compiler',
            'Both Compiler and Transpilar',
        ],
        correct: 3,
    },
    {
        title: 'Props are ______ into other components',
        answerOptions: [
            'Injected',
            'Methods',
            'Both A and B',
            'All of these',
        ],
        correct: 1,
    },
    {
        title: 'How can you access the state of a component from inside of a member function?',
        answerOptions: [
            'this.getState()',
            'this.prototype.stateValue',
            'this.state',
            'this.values',
        ],
        correct: 3,
    },

]

function Result({correct, handleRestartClick}) {
    return <div className="result">
        <img src="https://cdn-icons-png.flaticon.com/512/6372/6372105.png" alt="the end"/>
        <h2>You answered {correct} out of {questions.length} correctly</h2>
        <button onClick={() => handleRestartClick()}>Try again</button>
    </div>
}

function Game({step, question, handleAnswerClick}) {
    const progress = Math.round(step / questions.length * 100).toString()

    return <>
        <div className="progress">
            <div style={{width: `${progress}%`}} className="progress__inner"></div>
        </div>
        <h1>{question.title}</h1>
        <ul>
            {question.answerOptions.map((answerOption, index) => {
                return (
                    <li
                        key={index}
                        onClick={() => handleAnswerClick(index)}
                    >
                        {answerOption}
                    </li>)
            })}
        </ul>
        <small className="counter">{step + 1} of {questions.length}</small>
    </>
}

function App() {
    const [step, setStep] = useState(0)
    const [correct, setCorrect] = useState(0)
    const question = questions[step]

    const handleAnswerClick = (answerOption) => {
        setStep(step + 1)

        if (answerOption === question.correct) {
            setCorrect(correct + 1)
        }
    }

    const handleRestartClick = () => {
        if (step === questions.length) {
            setStep(0)
        }
    }

    return <div className="App">
        {
            step !== questions.length
                ? <Game step={step} question={question} handleAnswerClick={handleAnswerClick}/>
                : <Result correct={correct} handleRestartClick={handleRestartClick}/>
        }
    </div>
}

export default App