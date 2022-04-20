
//modelo para determinar que valores vienen del formulario
export const vehiculosInterface = (data = {}) => {
    return{
        placa: data?.placa || null,
        marca: data?.marca || null,
        modelo: data?.modelo || null,
        serie: data?.serie || null,
        color: data?.color || null
}
}