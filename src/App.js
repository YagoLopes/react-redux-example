import React, { Component } from "react";
import { Provider } from "react-redux"; //O Provider passará o stado do redux para todos os componentes que estão dentro dele
import store from "./store";
import TodoList from "./TodoList";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <TodoList />
        </div>
      </Provider>
    );
  }
}

export default App;
