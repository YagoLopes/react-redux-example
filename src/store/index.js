/*O store é o local onde está armazenado todas as informações presentes na aplicação*/

import { createStore, compose, applyMiddleware } from "redux"; //createStore serve para criar um store
import reducers from "./reducers"; // importando o combine reducer
const composer =
  process.env.NODE_ENV === "development"
    ? compose(
        applyMiddleware(...[]),
        console.tron.createEnhancer()
      )
    : applyMiddleware(...[]);
const store = createStore(reducers, composer); //dentro da função createStore será passado os reducers
export default store;
