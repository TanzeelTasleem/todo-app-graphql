let TodoItem = [
  { title: "pick up" },
  { title: "hello world" },
  { title: "All is well" },
];

const resolvers = {
  Query: {
    get_todo: () => TodoItem,
  },
  Mutation: {
    createTodo: (e, { input }) => {
      TodoItem.push({ title: input.title });
      return {
        title: input.title,
      };
    },
    removeTodo: (e, { input }) => {
      const temp = TodoItem.filter((item) => item.title !== input.title);
      TodoItem = temp;
      return TodoItem;
    },
  },
};
module.exports = resolvers;
