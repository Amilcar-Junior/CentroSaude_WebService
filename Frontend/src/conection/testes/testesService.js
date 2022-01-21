import http from "../../http";

class TestesService{

 getAll() {

   return http.get("/testes");

 }

 get(id) {

   return http.get(`/testes/${id}`);

 }

 create(data) {

   return http.post("/testes", data);

 }

 update(id, data) {

   return http.put(`/testes/${id}`, data);

 }

 delete(id) {

   return http.delete(`/testes/${id}`);

 }

}

export default new TestesService();