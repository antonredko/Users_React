import './List.css'
import React from "react"

export default function List({list}) {
    return (
        <tbody className="table_body">
            {list.map((user, index) => (
                <tr className="user" key={index}>
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>{user.website}</td>
                    <td>
                        <button className="remove_user_btn"></button>
                    </td>
                </tr>
            ))}
        </tbody>
    )
}