import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Clock from './chapter4/Clock.jsx';
import CommentList from './chapter5/CommentList';


setInterval(()=>{
  ReactDOM.render(
    <React.StrictMode>
      <CommentList />
      <Clock />
    </React.StrictMode>,
    document.getElementById('root')
  );
}, 1000);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
