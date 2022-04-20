import React from 'react';
import Button from '@mui/material/Button';

// se creó el componente Button para poder usarlo en el componente Form 
const ButtonComponent = (props) => {
   
    return (
        <div
        style={{
            margin: "3%"
        }}>
            <Button onClick={ () => props.onClick()} 
            variant={props.variant}>
                {props.label}
            </Button>
        </div>
    );
}




export default ButtonComponent;