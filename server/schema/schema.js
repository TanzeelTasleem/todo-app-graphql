const { gql } = require("apollo-server");

const typeDefs = gql`
  type todo {
    title: String
  }
  input postTodo {
    title: String
  }
  type Mutation {
    createTodo(input : postTodo): todo ,
    removeTodo(input : postTodo) : [todo]
  }
  type Query {
    get_todo: [todo]
  }
`;
module.exports = typeDefs;
