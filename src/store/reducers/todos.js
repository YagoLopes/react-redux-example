const INICIAL_STATE =  [
    { id:1, text: 'Fazer café'},
    { id:2, text: 'Estudar React'},
]

export default function todos(state = INICIAL_STATE , action) {
    switch(action.type){
        default:
        return state;
    }

}