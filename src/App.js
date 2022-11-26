import React, {useState} from 'react'

import './index.css'

const Modal = ({open, setOpen, children}) => (
    <div className={`overlay animated ${open ? 'show' : ''}`}>
        <div className="modal">
            <svg onClick={() => setOpen(false)} height="200" viewBox="0 0 200 200" width="200">
                <title/>
                <path
                    d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z"/>
            </svg>

            {/*Without props*/}
            {/*<img src="https://media1.giphy.com/media/3If8u5wFsfII0/giphy.gif" alt="Modal"/>*/}

            {/*With props*/}
            {children}
        </div>
    </div>
)

function App() {
    const [open, setOpen] = useState(false)

    return (
        <div className="App">
            <button onClick={() => setOpen(true)} className="open-modal-button">Open</button>

            {/*Conditional Rendering*/}
            {/*{open && (
                <div className="overlay">
                    <div className="modal">
                        <svg onClick={() => setOpen(false)} height="200" viewBox="0 0 200 200" width="200">
                            <title/>
                            <path
                                d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z"/>
                        </svg>
                        <img src="https://media1.giphy.com/media/3If8u5wFsfII0/giphy.gif" alt="Modal"/>
                    </div>
                </div>
            )}*/}
            {/*{open && <Modal open={open} setOpen={setOpen} />}*/}

            {/*Open by adding className*/}
            {/*<div className={`overlay animated ${open ? 'show' : ''}`}>*/}
            {/*    <div className="modal">*/}
            {/*        <svg onClick={() => setOpen(false)} height="200" viewBox="0 0 200 200" width="200">*/}
            {/*            <title/>*/}
            {/*            <path*/}
            {/*                d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z"/>*/}
            {/*        </svg>*/}
            {/*        <img src="https://media1.giphy.com/media/3If8u5wFsfII0/giphy.gif" alt="Modal"/>*/}
            {/*    </div>*/}
            {/*</div>*/}
            <Modal open={open} setOpen={setOpen}>
                <h3>Modal title</h3>
                <img src="https://media1.giphy.com/media/3If8u5wFsfII0/giphy.gif" alt="Modal"/>
            </Modal>
        </div>
    )
}

export default App