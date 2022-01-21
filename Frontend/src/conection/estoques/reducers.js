import {

    CREATE_ESTOQUE,
   
    RETRIEVE_ESTOQUES,
   
    UPDATE_ESTOQUE,
   
    DELETE_ESTOQUE,
   
   } from "./actionTypes";
   
   const initialState = [];
   
   function estoqueReducer(estoques = initialState, action) {
   
    const { type, payload } = action;
   
    switch (type) {
   
      case CREATE_ESTOQUE:
   
        return [...estoques, payload];
   
      case RETRIEVE_ESTOQUES:
   
        return payload;
   
      case UPDATE_ESTOQUE:
   
        return estoques.map((estoque) => {
   
          if (estoque.id === payload.id) {
   
            return {
   
              ...estoque,
   
              ...payload,
   
            };
   
          } else {
   
            return estoque;
   
          }
   
        });
   
      case DELETE_ESTOQUE:
   
        return estoques.filter(({ id }) => id !== payload.id);
   
      default:
   
        return estoques;
   
    }
   
   }
   
   export default estoqueReducer;