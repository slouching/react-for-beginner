import React, {useEffect, useState} from 'react'
import {Collection} from './Collection'

import './index.css'

const categories = [
    { "name": "All" },
    { "name": "Sea" },
    { "name": "Mountains" },
    { "name": "Architecture" },
    { "name": "Cities" }
]

function App() {
    const [isLoading, setIsLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [collections, setCollections] = useState([])
    const [searchValue, setSearchValue] = useState('')
    const [activeCategory, setActiveCategory] = useState(0)

    useEffect(() => {
        setIsLoading(true)

        const categoryParam = activeCategory ? `category=${activeCategory}` : ''

        fetch(`https://638f5dee4ddca317d7f69232.mockapi.io/collections?page=${page}&limit=3&${categoryParam}`)
            .then(res => res.json())
            .then(json => setCollections(json))
            .catch(e => {
                console.warn(e)
                alert('Failed to get photo collection')
            })
            .finally(() => setIsLoading(false))
    }, [activeCategory, page])

    return (
        <div className="App">
            <h1>Photo collection</h1>
            <div className="top">
                <ul className="tags">
                    {
                        categories.map((category, index) => {
                            return <li
                                key={index}
                                className={activeCategory === index ? 'active' : null}
                                onClick={() => setActiveCategory(index)}
                            >
                                {category.name}
                            </li>
                        })
                    }
                </ul>
                <input
                    className="search-input"
                    placeholder="Search by name"
                    value={searchValue}
                    onChange={e => setSearchValue(e.target.value)}
                />
            </div>
            <div className="content">
                {isLoading
                    ? <h2>Loading...</h2>
                    : collections
                        .filter(collection => {
                            return collection.name.toLowerCase().includes(searchValue.toLowerCase())
                        })
                        .map((collection, index) => {
                        return <Collection
                            key={index}
                            name={collection.name}
                            images={collection.photos}
                        />
                    })
                }
            </div>
            <ul className="pagination">
                {
                    [...Array(3)].map((_, index) => {
                        return <li
                            key={index}
                            className={page === (index + 1) ? 'active' : null}
                            onClick={() => setPage(index + 1)}
                        >
                            {index + 1}
                        </li>
                    })
                }
            </ul>
        </div>
    )
}

export default App