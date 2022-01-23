import { configureStore } from "@reduxjs/toolkit";
import estoqueReducer from "./conection/estoques/reducers";
import funcionarioReducer from "./conection/funcionarios/reducers";
import pacienteReducer from "./conection/pacientes/reducers";
import servicoReducer from "./conection/servicos/reducers";


export default configureStore({

 reducer: {


   pacientes: pacienteReducer,
   funcionarios: funcionarioReducer,
   servicos: servicoReducer,
   estoques: estoqueReducer,
   

 },

});

