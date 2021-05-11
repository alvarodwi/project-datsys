import http from "../http-common";

class IllustratorDataService {
  getAll(params) {
    return http.get("/illustrator", { params });
  }

  get(id) {
    return http.get(`/illustrator/${id}`);
  }

  create(data) {
    return http.post("/illustrator", data);
  }

  update(id, data) {
    return http.post(`/illustrator/${id}`, data);
  }

  delete(id) {
    return http.delete(`/illustrator/${id}`);
  }
}

export default new IllustratorDataService();
