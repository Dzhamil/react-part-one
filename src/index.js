import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let dialogs = [
    {id: 0, name: 'Hello'},
    {id: 1, name: 'Dima'},
    {id: 2, name: 'Katya'},
    {id: 3, name: 'Pasha'},
    {id: 4, name: 'Kristina'},
    {id: 5, name: 'Alena'}
];

let messages = [
    {id: 0, message: 'Andrey'},
    {id: 1, message: 'Hi'},
    {id: 2, message: 'Yo'}
];

let posts = [
    {id: 0, message:'Hi, have are you?', likeCounts: 12},
    {id: 1, message:'It\'s my first posts', likeCounts: 988 }
];

ReactDOM.render(
  <React.StrictMode>
    <App dialogs={dialogs} messages={messages} posts={posts}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
