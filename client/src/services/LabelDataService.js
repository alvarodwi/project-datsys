import http from "../http-common";

class LabelDataService {
  getAll(params) {
    return http.get("/label", { params });
  }

  get(id) {
    return http.get(`/label/${id}`);
  }

  create(data) {
    return http.post("/label", data);
  }

  update(id, data) {
    return http.post(`/label/${id}`, data);
  }

  delete(id) {
    return http.delete(`/label/${id}`);
  }
}

export default new LabelDataService();
