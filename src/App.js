import React, {useState} from 'react'

import './index.css'

function App() {
    const [count, setCount] = useState(0)

    const decrease = () => {
        setCount(count - 1)
    }

    const increase = () => {
        setCount(count + 1)
    }

    const reset = () => {
        setCount(0)
    }

    return (
        <div className="App">
            <div>
                <h1 className="title">Counter:</h1>
                <h2 className="output">{count}</h2>
                <button onClick={decrease} className="decrease">- Decrease</button>
                <button onClick={reset} className="reset">Reset</button>
                <button onClick={increase} className="increase">Increase +</button>
            </div>
        </div>
    )
}

export default App
