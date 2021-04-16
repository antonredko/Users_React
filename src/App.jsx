import "./App.css"
import React, { useState, useEffect } from "react"
import List from "./components/List/List"
import Head from './components/Head/Head'

function App() {
    const cols = ['Name', 'Username', 'Email', 'Website', '']
    const [users, setUsers] = useState([])
    useEffect(() => {
        (async () => {
            const data = await fetch('https://jsonplaceholder.typicode.com/users').then(r => r.json())
            setUsers(data)
        })()
    }, [])
    return (
        <div className="container">
            <table className="table_block">
                <caption className="table_title">Users</caption>
                <Head cols={cols}/>
                <List list={users}/>
            </table>
        </div>
    )
}

export default App