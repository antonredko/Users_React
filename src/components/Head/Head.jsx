import './Head.css'
import React from 'react'

function HeadItem(props) {
    return (
        props.col.length > 0
            ? <th scope="col" className="table_col">{props.col}</th>
            : <th scope="col"></th>
    )
}

function Head(props) {
    return (
        <thead className="table_head">
            <tr>
                {props.cols.map((col, index) => <HeadItem col={col} key={index}/>)}
            </tr>
        </thead>
    )
}

export default Head