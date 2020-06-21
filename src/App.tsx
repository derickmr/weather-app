import React from 'react';
import './App.css';
import GlobalStyle from '../src/styles/global'

import Routes from './routes'

function App() {
    return (
        <>
            <Routes/>
            <GlobalStyle/>
        </>
        );
}

export default App;
