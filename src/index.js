import React from 'react';
import ReactDom from 'react-dom';
import './index.css';

import Titulo from './components/Titulo';

const App = () => {
    return (
        <div className='container'>
            <Titulo color='blue'>
                Value by Props
            </Titulo>
            <h1>Hello World</h1>
        </div>
    );
}

ReactDom.render(<App />, document.getElementById('root'));