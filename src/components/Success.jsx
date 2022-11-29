import React from 'react'

export const Success = ({count, onClickRestart}) => {
    return (
        <div className="success-block">
            <img src="/assets/success.svg" alt="Success"/>
            <h3>Successfully!</h3>
            <p>An invitation has been sent to all {count} users.</p>
            <button onClick={() => onClickRestart()} className="send-invite-btn">Back</button>
        </div>
    )
}