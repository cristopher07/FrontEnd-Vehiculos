import * as React from 'react';
import Button from '@mui/material/Button';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import FormVehiculo from './Form';

//componente para el dialogo del formulario
 const FormDialog = ({ open, handleClose, tipo, handleCreateOrEdit, handleDelete }) => {


  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row"
          }}>
          <DialogTitle
          >Ingresa un Vehículo</DialogTitle>
      
          {tipo === "create" ? <></> :
            <IconButton
              onClick={handleDelete}
              style={{ marginRight: "1%" }}
              aria-label="delete">
              <DeleteIcon
                style={{
                  color: "red"
                }} />
            </IconButton>}
        </div>
        <DialogContent>
          <DialogContentText>

          </DialogContentText>
          <FormVehiculo></FormVehiculo>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button onClick={handleCreateOrEdit}>{tipo === "create" ? "Insertar" : "Actualizar"}</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}


export default FormDialog;