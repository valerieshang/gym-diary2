import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

/*
    (1) This code render React into an element with id="root".
    
    (2) <App /> is a root (parent) JSX Component where all other components resides in it as children.

    (3) Recall document.getElementById(), a commonly used function to perform DOM Manipulation.

    (4) Explanation - The index.js file renders the root JSX called the <App /> to <div id="root"></div> in a generated index.html file.
    The index.html file resides in the public folder. You should take a look at the content of the folder and look
    for <div id="root"></div> element.
*/
ReactDOM.render(<App />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
