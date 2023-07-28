import React from 'react';
import './App.scss';
import MainNav from './navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
 
function App() {
    return (
      <>
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat:400,700&amp;display=swap"></link>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato:400,700,400italic,700italic&amp;display=swap"></link>
      </head>
      <div class="full-container">
      <div class="app-container">
        <MainNav />
      </div>
      </div>
      </>
      
    );
}
 
export default App;
