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

import React from "react";
import { connect } from "react-redux"; /*Vai conectar o componente com algum reducer do redux*/
import PropTypes from "prop-types"; /*Serve para fazer a validação dos prop-types do componente*/
const TodoList = props => {
  return (
    <ul>
      {props.todos.map(todos => (
        <li key={todos.id}>{todos.text}</li>
      ))}
    </ul>
  );
};

TodoList.prototype = {
  /*Validação de prop types*/
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

export default connect(mapStateToProps)(TodoList); //utilizando o connect
