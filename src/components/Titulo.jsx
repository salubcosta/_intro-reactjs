import React from 'react';

import './Titulo.css';

const Titulo = (props) => {
    return(
        <React.Fragment>
            <h1 className='title-color'>
                {props.children}
            </h1>
            <h2 className='title-color'>{props.color}</h2>
        </React.Fragment>
    )
}

export default Titulo;