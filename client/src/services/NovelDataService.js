import http from "../http-common";

class NovelDataService {
  getAll(params) {
    return http.get("/novel", { params });
  }

  get(id) {
    return http.get(`/novel/${id}`);
  }

  create(data) {
    return http.post("/novel", data);
  }

  update(id, data) {
    return http.post(`/novel/${id}`, data);
  }

  delete(id) {
    return http.delete(`/novel/${id}`);
  }
}

export default new NovelDataService();
