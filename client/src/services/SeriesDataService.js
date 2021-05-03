import http from "../http-common";

class SeriesDataService{
    getAll() {
        return http.get("/series");
    }

    get(id) {
        return http.get(`/series/${id}`);
    }

    create(data) {
        return http.post("/series",data);
    }

    update(id,data){
        return http.put(`/series/${id}`,data);
    }

    delete(id) {
        return http.delete(`/series/${id}`);
    }

    deleteAll() {
        return http.delete("/series");
    }

    findByTitle(title) {
        return http.get(`/series?title=${title}`);
    }
}

export default new SeriesDataService();