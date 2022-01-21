import {

    CREATE_PACIENTE,
   
    RETRIEVE_PACIENTES,
   
    UPDATE_PACIENTE,
   
    DELETE_PACIENTE,
   
   } from "./actionTypes";
   
   const initialState = [];
   
   function pacienteReducer(pacientes = initialState, action) {
   
    const { type, payload } = action;
   
    switch (type) {
   
      case CREATE_PACIENTE:
   
        return [...pacientes, payload];
   
      case RETRIEVE_PACIENTES:
   
        return payload;
   
      case UPDATE_PACIENTE:
   
        return pacientes.map((paciente) => {
   
          if (paciente.id === payload.id) {
   
            return {
   
              ...paciente,
   
              ...payload,
   
            };
   
          } else {
   
            return paciente;
   
          }
   
        });
   
      case DELETE_PACIENTE:
   
        return pacientes.filter(({ id }) => id !== payload.id);
   
      default:
   
        return pacientes;
   
    }
   
   }
   
   export default pacienteReducer;