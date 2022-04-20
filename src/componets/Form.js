import React from "react";
import InputField from "./InputField";
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import {  changeKeyVehiculos } from "../store/actions/vehiculos.actions";
import { useDispatch, useSelector } from "react-redux";
import { debounce } from "lodash";

//componente form para crear un nuevo vehiculo o actualizar uno existente
const FormVehiculo = () => {

    const dispatch = useDispatch();


    const detalleVehiculos = useSelector(({ state }) => state.detalleVehiculos);


    const handleInputChange = (e) => {
        let data = { [e.target.name]: e.target.value };
        dispatch(changeKeyVehiculos(data));
    }; 

    const handleChange = debounce(handleInputChange, 200);
    
    return (
        <div  >
            <Paper style={{
                display: "flex",
                justifyContent: "center",
                alignSelf: "center",
            }}>
                <Grid container >

                    <Grid item lg={6} xs={12}>
                        <InputField
                            id="placa"
                            name="placa"
                            onChange={handleChange}
                            variant="outlined"
                            label="Placa"
                            onInput={(e)=>(e.target.value= e.target.value.slice(0,7))}
                            defaultValue={detalleVehiculos?.placa || ""}></InputField>
                    </Grid>
                    <Grid item lg={6} xs={12}>

                        <InputField
                            id="marca"
                            onInput={(e)=>(e.target.value= e.target.value.slice(0,10))}
                            name="marca"
                            onChange={handleChange}
                            variant="outlined"
                            label="Marca"
                            defaultValue={detalleVehiculos?.marca || ""}></InputField>
                    </Grid>
                    <Grid item lg={6} xs={12}>
                        <InputField
                          
                            type="number"
                            id="modelo"
                            name="modelo"
                            onChange={handleChange}
                            onInput={(e)=>(e.target.value= e.target.value.slice(0,4))}
                            variant="outlined"
                            label="Modelo"
                            defaultValue={detalleVehiculos?.modelo || ""}></InputField>
                    </Grid>
                    <Grid item lg={6} xs={12}>
                        <InputField
                            id="serie"
                            name="serie"
                            onChange={handleChange}
                            onInput={(e)=>(e.target.value= e.target.value.slice(0,10))}
                            variant="outlined"
                            label="Serie"
                            defaultValue={detalleVehiculos?.serie || ""}></InputField>
                    </Grid>
                    <Grid item lg={6} xs={12}>
                        <InputField
                            id="color"
                            name="color"
                            onChange={handleChange}
                            onInput={(e)=>(e.target.value= e.target.value.slice(0,10))}
                            variant="outlined"
                            label="Color"
                            defaultValue={detalleVehiculos?.color || ""}></InputField>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
}
export default FormVehiculo;