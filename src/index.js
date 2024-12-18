import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

//getting the html component with id="root"(serves as the container for our application)
const root = ReactDOM.createRoot(document.getElementById('root'));
//rendering the root 
root.render(
    <App />//app component
);


