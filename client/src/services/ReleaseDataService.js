import http from "../http-common";

class ReleaseDataService {
  getAll(params) {
    return http.get("/release", { params });
  }

  get(id) {
    return http.get(`/release/${id}`);
  }

  create(data) {
    return http.post("/release", data);
  }

  update(id, data) {
    return http.post(`/release/${id}`, data);
  }

  delete(id) {
    return http.delete(`/release/${id}`);
  }
}

export default new ReleaseDataService();
