import React, {useEffect, useState} from 'react'
import {Success} from './components/Success'
import {Users} from './components/Users'

import './index.css'

function App() {
    const [users, setUsers] = useState([])
    const [isLoading, setLoading] = useState(true)
    const [searchValue, setSearchValue] = useState('')
    const [invites, setInvites] = useState([])
    const [success, setSuccess] = useState(false)

    useEffect(() => {
        fetch('https://reqres.in/api/users')
            .then(res => res.json())
            .then(json => setUsers(json.data))
            .catch(err => {
                console.warn(err)
                alert('Не удалось получить список пользователей')
            })
            .finally(() => setLoading(false))
    }, [])

    const onChangeSearchValue = (event) => {
        setSearchValue(event.target.value)
    }

    const onClickInvite = (id) => {
        if (invites.includes(id)) {
            setInvites(prev => prev.filter(_id => _id !== id))
        } else {
            setInvites(prev => [...prev, id])
        }
    }

    const onClickSendInvites = () => {
        setSuccess(true)
    }

    const onClickRestart = () => {
        setInvites([])
        setSuccess(false)
    }

    return (
        <div className="App">
            {
                success
                    ? <Success
                        count={invites.length}
                        onClickRestart={onClickRestart}
                    />
                    : <Users
                        items={users}
                        isLoading={isLoading}
                        searchValue={searchValue}
                        onChangeSearchValue={onChangeSearchValue}
                        invites={invites}
                        onClickInvite={onClickInvite}
                        onClickSendInvites={onClickSendInvites}
                    />
            }
        </div>
    )
}

export default App