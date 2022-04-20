import * as React from "react";
import TextField from "@mui/material/TextField";

const InputField = (props) => {
  return (
    <div style={{ margin: "3%" }}>
      <TextField
      type={props.type}
        style={{ width: "100%" }}
        onInput={props.onInput}
        defaultValue={props.defaultValue}
        id={props.id}
        label={props.label}
        variant={props.variant}
        value={props.value}
        onChange={(event) =>
          props.onChange &&
          props.onChange({
            target: { value: event.target.value, name: props.name },
          })
        }
      />
    </div> 
  );
};

export default InputField;