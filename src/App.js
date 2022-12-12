import React, {useEffect, useState} from 'react'
import {Post} from './Post'

import './index.css'

function App() {
    const [posts, setPosts] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [fetching, setFetching] = useState(true)
    const [totalCount, setTotalCount] = useState(0)

    useEffect(() => {
        if (fetching) {
            fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${currentPage}`)
                .then(response => {
                    setTotalCount(Number(response.headers.get('x-total-count')))
                    return response.json()
                })
                .then(data => {
                    setPosts([...posts, ...data])
                    setCurrentPage(prev => prev + 1)
                })
                .catch(e => {
                    console.warn(e)
                    alert('Failed to get posts')
                })
                .finally(() => setFetching(false))
        }
    }, [fetching])

    useEffect(() => {
        document.addEventListener('scroll', scrollHandler)
        return function () {
            document.removeEventListener('scroll', scrollHandler)
        }
    }, [])

    const scrollHandler = (e) => {
        if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100
        && posts.length <= totalCount) {
            setFetching(true)
        }
    }

    return (
        <div className="App">
            <h1>Posts</h1>
            {
                posts.map(post => {
                    return <Post key={post.id} id={post.id} title={post.title} body={post.body}/>
                })
            }
        </div>
    )
}

export default App