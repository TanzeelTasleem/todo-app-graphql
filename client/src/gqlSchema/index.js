import { gql } from "@apollo/client"

 const createNewTodo = gql`
  mutation createTodo($title: String!){
      createTodo(input : {title : $title})
      {
        title
      }
    }
  `
  const RemoveTodo = gql`
    mutation removeTodo($title : String!){
        removeTodo(input : {title : $title } ){
            title 
        }
    }
  `
 const get_Todo = gql`
  query getTodo {
    get_todo {
      title
    }
  }
`
;

export {
    createNewTodo ,
    RemoveTodo,
    get_Todo
}