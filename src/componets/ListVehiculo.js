import React, { useEffect, useState } from "react";
import ButtonComponent from "./Button";

import TextField from "./TextField";

import Paper from '@mui/material/Paper';

import { useToasts } from 'react-toast-notifications';
import { DataGrid } from '@mui/x-data-grid';
import { useDispatch, useSelector } from "react-redux";

import {
  cleanDetalle, createVehiculo, deleteVehiculo, deleteVehiculos, retrieveVehiculo, retrieveVehiculos, updateVehiculo,

} from "../store/actions/vehiculos.actions";
import FormDialog from "./Dialog";
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

const ListVehiculo = () => {

  const [open, setOpen] = useState(false);
  const [tipo, setTipo] = useState("");

  const { addToast } = useToasts();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(retrieveVehiculos());
  }, [dispatch]);

  const detalleVehiculo = useSelector(({ state }) => state.detalleVehiculos);
  const vehiculos = useSelector(({ state }) => state.vehiculos);

  const handleClickOpen = () => {
    dispatch(cleanDetalle())
    setOpen(true);
    setTipo("create");
  };

  const handleClose = () => {
    setOpen(false); //cerrar el dialog
  };

  const handleDelete = () => {
    dispatch(deleteVehiculo(detalleVehiculo.placa))
      .then(() => {
        addToast("La información se ha eliminado correctamente.", {
          appearance: "error",
          autoDismiss: true,
        });
        setOpen(false);
      }).catch((e) => {
        addToast("Ha sucedido un error", {
          appearance: "error",
          autoDismiss: true,
        });
        setOpen(false);
      });
  }

  const handleDeleteAll = () => {
    dispatch(deleteVehiculos())
      .then(() => {
        addToast("Se ha eliminado toda la información", {
          appearance: "error",
          autoDismiss: true,
        });
        setOpen(false);
      }).catch((e) => {
        addToast("Ha sucedido un error", {
          appearance: "error",
          autoDismiss: true,
        });
        setOpen(false);
      });
  }

  //obtener el detalle de vehículo
  const verDetalleVehiculo = (placa) => {
    dispatch(retrieveVehiculo(placa));
    setOpen(true)
    setTipo("update")
  };

  const handleCreateOrEdit = () => {
    const { placa, marca, modelo, serie, color } = detalleVehiculo;

    if (tipo === "create") {

      dispatch(createVehiculo(placa, marca, modelo, serie, color))
        .then(() => {
          addToast("La información se ha insertado correctamente.", {
            appearance: "success",
            autoDismiss: true,
          });
          setOpen(false);
        })
        .catch((e) => {
          addToast("Ha sucedido un error", {
            appearance: "error",
            autoDismiss: true,
          });
          setOpen(false);
        });

    } else {
      dispatch(updateVehiculo(placa, detalleVehiculo))
        .then(() => {
          addToast("La información se ha actualizado correctamente.", {
            appearance: "info",
            autoDismiss: true,
          });
          setOpen(false);
        })
        .catch((e) => {
          addToast("Ha sucedido un error", {
            appearance: "error",
            autoDismiss: true,
          });
        });

    }
  };



  const columns = [
    {
      field: "placa",
      headerName: "Placa",
      sortable: true,
      width: 200,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "marca",
      headerName: "Marca",
      sortable: true,
      width: 200,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "modelo",
      headerName: "Modelo",
      sortable: true,
      width: 200,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "serie",
      headerName: "Serie",
      sortable: true,
      width: 200,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "color",
      headerName: "Color",
      sortable: true,
      width: 200,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "action",
      headerAlign: "center",
      headerName: "Acciones",
      renderCell: (params) => {
        return (
          <button
            onClick={() => verDetalleVehiculo(params.row.placa)}
            className="btn btn-warning btn-sm"
          >
            Editar
          </button>
        );
      },
      align: "center",
    },
  ];

  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignContent: "center",
      background: "white",
      height: "100vh",
      flexDirection: "column"
    }} >


      <Paper style={{
        display: "flex",
        justifyContent: "center",
        alignSelf: "center",
        flexDirection: "column"
      }}>
        <TextField

          variant="h4" label="Listado Vehículos"></TextField>
        <div style={{ height: 300, width: 900 }}>

          <DataGrid
            rows={vehiculos || []}
            columns={columns || []}
            pageSize={5}
            rowsPerPageOptions={[5]}
            disableSelectionOnClick
            getRowId={(row) => row.placa}
          />
        </div>

        <div style={{
          display: "flex",
          bottom: 10,
          right: 10,
          position: "absolute"
        }}>
          <Fab color="primary" aria-label="add"
            onClick={handleClickOpen}>
            <AddIcon />
          </Fab>

        </div>
        <ButtonComponent
          variant="outlined"
          label="Borrar Todo"
          onClick={handleDeleteAll}
        ></ButtonComponent>
      </Paper>
      <FormDialog tipo={tipo}
        open={open}
        handleClose={handleClose}
        handleDelete={handleDelete}
        handleCreateOrEdit={handleCreateOrEdit}
      ></FormDialog>
    </div>
  );
}

export default ListVehiculo;