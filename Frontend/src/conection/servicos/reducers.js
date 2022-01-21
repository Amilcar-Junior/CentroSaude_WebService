import {

    CREATE_SERVICO,
   
    RETRIEVE_SERVICOS,
   
    UPDATE_SERVICO,
   
    DELETE_SERVICO,
   
   } from "./actionTypes";
   
   const initialState = [];
   
   function servicoReducer(servicos = initialState, action) {
   
    const { type, payload } = action;
   
    switch (type) {
   
      case CREATE_SERVICO:
   
        return [...servicos, payload];
   
      case RETRIEVE_SERVICOS:
   
        return payload;
   
      case UPDATE_SERVICO:
   
        return servicos.map((servico) => {
   
          if (servico.id === payload.id) {
   
            return {
   
              ...servico,
   
              ...payload,
   
            };
   
          } else {
   
            return servico;
   
          }
   
        });
   
      case DELETE_SERVICO:
   
        return servicos.filter(({ id }) => id !== payload.id);
   
      default:
   
        return servicos;
   
    }
   
   }
   
   export default servicoReducer;