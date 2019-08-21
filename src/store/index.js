/*O store é o local onde está armazenado todas as informações presentes na aplicação*/

import { createStore } from "redux"; //createStore serve para criar um store
import reducers from "./reducers";
const store = createStore(reducers); //dentro da função createStore será passado os reducers
export default store;
