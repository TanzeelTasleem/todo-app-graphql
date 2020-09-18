import { useMutation, useQuery } from "@apollo/client";
import React, { useState } from "react";
import { get_Todo, createNewTodo, RemoveTodo } from "../gqlSchema";

export const Todo = () => {
  const [text, settext] = useState("");
  const { loading, data } = useQuery(get_Todo);
  const [createTodo] = useMutation(createNewTodo);
  const [removeTodo]=useMutation(RemoveTodo)
  console.log(text);
  loading ? console.log("loading ") : console.log(data.get_todo);

  const handleSubmit = (e) => {
    e.preventDefault();
    createTodo({
      variables: { title: text },
      refetchQueries: [{ query: get_Todo }],
    });
    settext('')
  };

  const handleClick=(title)=>{
      removeTodo({
        variables : { title: title },
        refetchQueries : [{query : get_Todo}]
      })
  }
  if (!loading) {
    return (
      <div>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input
            type="text"
            onChange={(e) => {
              settext(e.target.value);
            }}
            required
            value={text}
          />
        </form>
        <div >
        <ul>
          {data.get_todo.map((item, index) => {
            // console.log(item)
            return (
              <li key={index}>
                {item.title}
                <button onClick={()=>{handleClick(item.title)}}>x</button>
              </li>
            );
          })}
        </ul>
      </div>
      </div>
    );
  }
  return <h1>loading</h1>;
};
