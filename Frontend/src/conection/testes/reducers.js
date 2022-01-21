import {

    CREATE_TESTE,
   
    RETRIEVE_TESTES,
   
    UPDATE_TESTE,
   
    DELETE_TESTE,
   
   } from "./actionTypes";
   
   const initialState = [];
   
   function testeReducer(testes = initialState, action) {
   
    const { type, payload } = action;
   
    switch (type) {
   
      case CREATE_TESTE:
   
        return [...testes, payload];
   
      case RETRIEVE_TESTES:
   
        return payload;
   
      case UPDATE_TESTE:
   
        return testes.map((teste) => {
   
          if (teste.id === payload.id) {
   
            return {
   
              ...teste,
   
              ...payload,
   
            };
   
          } else {
   
            return teste;
   
          }
   
        });
   
      case DELETE_TESTE:
   
        return testes.filter(({ id }) => id !== payload.id);
   
      default:
   
        return testes;
   
    }
   
   }
   
   export default testeReducer;