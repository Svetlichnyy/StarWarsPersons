import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {CssBaseline} from "@mui/material";
import {BrowserRouter} from "react-router-dom"

function Main(){

    return (
        <React.StrictMode>
            <CssBaseline/>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </React.StrictMode>
    )
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <Main/>
);

