import './Head.css'
import React from 'react'

export default function Head({cols}) {
    return (
        <thead className="table_head">
            <tr>
                {cols.map((col, index) => 
                    col.length
                    ? <th scope="col" className="table_col" key={index}>{col}</th>
                    : <th scope="col" key={index}></th>
                )}
            </tr>
        </thead>
    )
}