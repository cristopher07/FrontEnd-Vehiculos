import http from "./http.service";

class VehiculoDataService {
  getAll() {
    return http.get("/vehiculos");
  }

  get(placa) {
    return http.get(`/vehiculos/${placa}`);
  }

  create(data) {
    return http.post("/vehiculos", data);
  }

  update(placa, data) {
    return http.put(`/vehiculos/${placa}`, data);
  }

  delete(placa) {
    return http.delete(`/vehiculos/${placa}`);
  }

  deleteAll() {
    return http.delete(`/vehiculos`);
  }


}

export default new VehiculoDataService();