import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>This is counter app</h1>
      <button id="increment-btn">Increment</button>
    </div>
  );
}

export default App;



//jest is the testing libray created
//by facebook for testing allmost any kind of javascript framework but most famous for react

//enzyme : create BY AIRBNB make easier the jest. 

//Both created to test the javascript framwork but enzyme can use for react only 

// 1. create react app 
//install jest
// Run the command : yarn add --dev jest babel-jest @babel/preset-env @babel/preset-react react-test-renderer
//npm run test

//install enzyme

//npm i --save-dev enzyme enzyme-adapter-react-16