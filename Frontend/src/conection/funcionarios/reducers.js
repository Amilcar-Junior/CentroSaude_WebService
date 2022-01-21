import {

    CREATE_FUNCIONARIO,
   
    RETRIEVE_FUNCIONARIOS,
   
    UPDATE_FUNCIONARIO,
   
    DELETE_FUNCIONARIO,
   
   } from "./actionTypes";
   
   const initialState = [];
   
   function funcionarioReducer(funcionarios = initialState, action) {
   
    const { type, payload } = action;
   
    switch (type) {
   
      case CREATE_FUNCIONARIO:
   
        return [...funcionarios, payload];
   
      case RETRIEVE_FUNCIONARIOS:
   
        return payload;
   
      case UPDATE_FUNCIONARIO:
   
        return funcionarios.map((funcionario) => {
   
          if (funcionario.id === payload.id) {
   
            return {
   
              ...funcionario,
   
              ...payload,
   
            };
   
          } else {
   
            return funcionario;
   
          }
   
        });
   
      case DELETE_FUNCIONARIO:
   
        return funcionarios.filter(({ id }) => id !== payload.id);
   
      default:
   
        return funcionarios;
   
    }
   
   }
   
   export default funcionarioReducer;