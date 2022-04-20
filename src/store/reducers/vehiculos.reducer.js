
//como se va almacenar y manipular la información del store
import { CLEAN_DETALLE, CLEAN_VEHICULO, CREATE_VEHICULO, 
  DELETE_VEHICULO, 
  DELETE_VEHICULOS, 
  RETRIEVE_VEHICULO, 
  RETRIEVE_VEHICULOS, 
  CHANGE_KEY,
  UPDATE_VEHICULO} from "../actions/types";
import { vehiculosInterface } from "../model/vehiculoInterface";

const initialState = {
  detalleVehiculos: new vehiculosInterface(),
  vehiculos: [],
};

const vehiculosReducer = function (state = initialState, { payload, type }) {
  switch (type) {
   
    case RETRIEVE_VEHICULOS: {
      return {
        ...state,
        vehiculos: payload,
      };
    }

    case CREATE_VEHICULO: {
      return {
        ...state,
        vehiculos: [...state.vehiculos, payload],
      };
    }

    case UPDATE_VEHICULO: {
      return {
        ...state,
        vehiculos: state.vehiculos.map((item) =>
          item.placa === payload.placa ? payload : item
        ),
      };
    }

    case DELETE_VEHICULO: {
      return {
        ...state,
        vehiculos: state.vehiculos.filter((item) =>
          item.placa !== payload
        ),
      };
    }
    case CLEAN_VEHICULO:
    case DELETE_VEHICULOS: {
      return {
        ...state,
        vehiculos: []
      };
    }

    case CHANGE_KEY: {
      return {
        ...state,
        detalleVehiculos: {
          ...state.detalleVehiculos,
          ...payload,
        },
      };
    }

    case RETRIEVE_VEHICULO: {
      return {
        ...state,
        detalleVehiculos: new vehiculosInterface(payload)
      };
    }

    case CLEAN_DETALLE: {
      return {
        ...state,
        detalleVehiculos: new vehiculosInterface(),
      }
    }


    default:
      return state;
  }
};
export default vehiculosReducer;

