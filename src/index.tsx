import React from 'react';
import ReactDOM from 'react-dom';
import './app.scss';
import Router from './js/Router';

document.addEventListener("DOMContentLoaded", function(event) {
ReactDOM.render(<Router />, document.getElementById('root'));
});