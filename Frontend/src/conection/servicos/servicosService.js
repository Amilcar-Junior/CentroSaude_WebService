import http from "../../http";

class ServicosService{

 getAll() {

   return http.get("/servicos");

 }

 get(id) {

   return http.get(`/servicos/${id}`);

 }

 create(data) {

   return http.post("/servicos", data);

 }

 update(id, data) {

   return http.put(`/servicos/${id}`, data);

 }

 delete(id) {

   return http.delete(`/servicos/${id}`);

 }

}

export default new ServicosService();