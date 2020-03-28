import React from 'react';
import { Provider } from "react-redux";
import Posts from "./components/Posts";
import PostForm from "./components/PostForm";
import './App.css';
import {store}  from "./store";

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <PostForm></PostForm>
      <Posts />
      
    </div>
    </Provider>
  );
}

export default App;
