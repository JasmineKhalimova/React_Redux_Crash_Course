import React from 'react';
import logo from './logo.svg';
import './App.css';

import Posts from './components/Posts';
import PostForm from './components/Postform';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      {/* Linging the PostForm File */}
      <PostForm />
      <hr />
      {/* Linging the Posts File */}
      <Posts /> 
    </div>
  );
}

export default App;
