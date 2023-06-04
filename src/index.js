import React from 'react';
import ReactDOM from 'react-dom/client';
import { globalStyles } from './Global-style/Global.styled';
import { Global } from '@emotion/react';
import App from './App/App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <App />
        <Global styles={globalStyles} />
    </>
);
