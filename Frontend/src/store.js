import { configureStore } from "@reduxjs/toolkit";
import estoqueReducer from "./conection/estoques/reducers";
import funcionarioReducer from "./conection/funcionarios/reducers";
import pacienteReducer from "./conection/pacientes/reducers";
import servicoReducer from "./conection/servicos/reducers";


import testeReducer from "./conection/testes/reducers";

export default configureStore({

 reducer: {

   testes: testeReducer,
   pacientes: pacienteReducer,
   funcionarios: funcionarioReducer,
   servicos: servicoReducer,
   estoques: estoqueReducer,
   

 },

});

