import http from "../../http";

class FuncionariosService{

 getAll() {

   return http.get("/funcionarios");

 }

 get(id) {

   return http.get(`/funcionarios/${id}`);

 }

 create(data) {

   return http.post("/funcionarios", data);

 }

 update(id, data) {

   return http.put(`/funcionarios/${id}`, data);

 }

 delete(id) {

   return http.delete(`/funcionarios/${id}`);

 }

}

export default new FuncionariosService();