import { CLEAN_DETALLE, CLEAN_VEHICULO, CREATE_VEHICULO, 
  DELETE_VEHICULO, 
  DELETE_VEHICULOS, 
  RETRIEVE_VEHICULO, 
  RETRIEVE_VEHICULOS, 
  UPDATE_VEHICULO, CHANGE_KEY } from './types';

import VehiculoDataService from '../../services/vehiculos.service';

export const retrieveVehiculos = () => async (dispatch) => {
  try {
    const res = await VehiculoDataService.getAll();
    dispatch({
      type: RETRIEVE_VEHICULOS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const retrieveVehiculo = (placa) => async (dispatch) => {
  try {
    const res = await VehiculoDataService.get(placa);
    dispatch({
      type: RETRIEVE_VEHICULO,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const changeKeyVehiculos = (data) => {
  return {
    type: CHANGE_KEY,
    payload: data,
  };
}

export const createVehiculo =
  (placa, marca, modelo, serie, color) => async (dispatch) => {
    try {
      const res = await VehiculoDataService.create({
        placa,
        marca,
        modelo,
        serie,
        color,
      });
      dispatch({
        type: CREATE_VEHICULO,
        payload: res.data,
      });
      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err);
    }
  };

  export const updateVehiculo = (placa, data) => async (dispatch) => {

    try{
      const res = await VehiculoDataService.update(placa, data);
      dispatch({
        type: UPDATE_VEHICULO,
        payload: data,
      });
      return Promise.resolve(res.data);
    }catch(err){
      return Promise.reject(err);
    }
  }

  export const deleteVehiculo = (placa ) => async (dispatch) => {
    try {
      const res = await VehiculoDataService.delete(placa);
      dispatch({
        type: DELETE_VEHICULO,
        payload: placa,
      });
      return Promise.resolve(res.data);
    }catch(err){
      return Promise.reject(err);
    }
  }

  export const deleteVehiculos = ( ) => async (dispatch) => {
    try {
      const res = await VehiculoDataService.deleteAll();
      dispatch({
        type: DELETE_VEHICULOS,
      });
      return Promise.resolve(res.data);
    }catch(err){
      return Promise.reject(err);
    }
  }

 

export const cleanVehiculo = () =>{
  return{
        type: CLEAN_VEHICULO
  }
}

export const cleanDetalle = () =>{
  return{
        type: CLEAN_DETALLE
  }
}