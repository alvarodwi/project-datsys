import http from "../http-common";

class SeriesDataService {
  getAll() {
    return http.get("/novel");
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

  deleteAll() {
    return http.delete("/novel");
  }

  findByTitle(title) {
    return http.get(`/novel?title=${title}`);
  }
}

export default new SeriesDataService();
