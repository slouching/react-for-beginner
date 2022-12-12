import React from 'react'

export const Post = ({id, title, body}) => {
    return (
        <div className='post'>
            <p>{id}</p>
            <h2 className='post__title'>{title}</h2>
            <p className='post__body'>{body}</p>
        </div>
    )
}