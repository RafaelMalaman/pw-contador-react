import './Card.css'

import React from 'react';

export default (props) => {
    const cardstyle = {
        backgroundColor: props.color,
        borderColor: props.color
    }

    return (
        <div className='Card' style={cardstyle}>
            <div className='Title'>{props.titulo}</div>
            <div className='Content'>
                {props.children}
            </div>
        </div>
    )
}