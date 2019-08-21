import React from "react";
import { Provider } from "react-redux"; //O Provider passará o stado do redux para todos os componentes que estão dentro dele
import store from "./store";
import TodoList from "./TodoList";

import "./config/ReactotronConfig";

console.tron.log("testando");

const App = () => (
  <Provider store={store}>
    <TodoList />
  </Provider>
);

export default App;
