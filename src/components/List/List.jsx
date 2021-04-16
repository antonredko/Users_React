import './List.css'
import React, { useState } from "react"

function ListItem(props) {
    return (
        <tr className="user">
            <td>{props.name}</td>
            <td>{props.username}</td>
            <td>{props.email}</td>
            <td>{props.website}</td>
            <td>
                <button className="remove_user_btn"></button>
            </td>
        </tr>
    )
}

function List(props) {
    return (
        <tbody className="table_body">
            {props.list.map((user) => (
                <ListItem
                    key={user.id}
                    name={user.name}
                    username={user.username}
                    email={user.email}
                    website={user.website}
                />
            ))}
        </tbody>
    )
}

export default List