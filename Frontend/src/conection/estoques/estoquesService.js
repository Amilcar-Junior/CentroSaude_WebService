import http from "../../http";

class EstoquesService{

 getAll() {

   return http.get("/estoques");

 }

 get(id) {

   return http.get(`/estoques/${id}`);

 }

 create(data) {

   return http.post("/estoques", data);

 }

 update(id, data) {

   return http.put(`/estoques/${id}`, data);

 }

 delete(id) {

   return http.delete(`/estoques/${id}`);

 }

}

export default new EstoquesService();