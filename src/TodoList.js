// STATE

/**
 * CADA REDUCER REPRESENTA UM TIPO DE INFORMAÇÃO NO NOSSO STATE
 * {
 *   //reducer de todos
 *   todos:{
 *           info: {informações dos todos}
 *      }
 * }
 *
 */

import React, { Fragment } from "react";
import { connect } from "react-redux"; /*Vai conectar o componente com algum reducer do redux*/
import PropTypes from "prop-types"; /*Serve para fazer a validação dos prop-types do componente*/
import * as TodoActions from "./store/actions/todos"; /*Importando todas as actions de uma vez*/
import { bindActionCreators } from "redux"; /*serve para aplicar o dispatch em todas as actions do componente*/
const TodoList = ({ todos, addTodo }) => {
  return (
    <Fragment>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
      <button onClick={() => addTodo("Novo todo")}>Adicionar</button>
    </Fragment>
  );
};

TodoList.prototype = {
  /*Validação de prop types*/
  addTodo: PropTypes.func.isRequired /*add todo é uma função obrigatoria*/,
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      //todos é um array de objetos
      id: PropTypes.number, // o id é um number
      text: PropTypes.string // o text é uma string
    })
  )
    .isRequired /** o todos é obrigatorio 
               não tem como montar uma lista de todos sem ter todos*/
};

const mapStateToProps = state => ({
  //mapear o state em propriedades
  todos: state.todos
});

/**
 * O mapDispatchToProps transforma as actions tambem em props do componente
 *
 */
const mapDispatchToProps = dispatch =>
  bindActionCreators(TodoActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList); //utilizando o connect
