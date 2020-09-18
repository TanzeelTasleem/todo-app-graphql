import React from "react";
import "./App.css";
import { ApolloProvider } from "@apollo/client";
import client from "./config";
import { Todo } from "./components/todo";
function App() {
  return (
    <ApolloProvider client = {client}> 
      <div className="App">
        <h1> Todo App </h1>
        <Todo/>
      </div>
    </ApolloProvider>
  );
}

export default App;
