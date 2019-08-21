/**
 * Reducer de Todos
 * O reducer sempre vai ser uma função!!
 * Os **REDUCERS** vão ouvir todas as actions da aplicação e com base no type ele retorna o resultado
 * O **STATE** é exatamente o  stado dos todos antes de sofrer alteração que o reducer vai fazer
 * A **ACTION** é a action que foi disparada pela aplicação
 * **TODOS OS REDUCERS VÃO OUVIR TODAS AS ACTIONS DA APLICAÇÃO**
 *  */

const INICIAL_STATE = [
  { id: 1, text: "Fazer café" },
  { id: 2, text: "Estudar React" }
];

export default function todos(state = INICIAL_STATE, action) {
  switch (action.type) {
    default:
      return state;
  }
}
