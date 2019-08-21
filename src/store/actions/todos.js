export const addTodo = text => ({
  type: "ADD_TODO",
  payload: { text }
}); //É um padrão de desenvolvimento passar todas as informações dentro do payload exeto o type

export const removeTodo = id => ({
  type: "REMOVE_TODO",
  payload: { id }
});
