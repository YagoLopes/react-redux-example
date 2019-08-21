import { combineReducers } from "redux"; /*COMBINA TODOS OS REDUCERS EM UM GRANDE REDUCER */
import todos from "./todos";

export default combineReducers({ todos });
