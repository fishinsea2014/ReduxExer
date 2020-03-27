import React from 'react';
import logo from './logo.svg';
import Posts from "./components/Posts";
import PostForm from "./components/PostForm";
import './App.css';

function App() {
  return (
    <div className="App">
      <PostForm></PostForm>
      <Posts />
      
    </div>
  );
}

export default App;
