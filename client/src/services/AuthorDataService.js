import http from "../http-common";

class AuthorDataService {
  getAll(params) {
    return http.get("/author", { params });
  }

  get(id) {
    return http.get(`/author/${id}`);
  }

  create(data) {
    return http.post("/author", data);
  }

  update(id, data) {
    return http.post(`/author/${id}`, data);
  }

  delete(id) {
    return http.delete(`/author/${id}`);
  }
}

export default new AuthorDataService();
