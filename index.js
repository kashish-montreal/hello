import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import { reduxStore } from './component/Redux/Store';
// import { nameStore } from './component/ReduxPractice/Store2';
// import { reduxStore } from './component/CounterRedux/Store';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={reduxStore}>
    <BrowserRouter>
    <App/>
    </BrowserRouter>
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
