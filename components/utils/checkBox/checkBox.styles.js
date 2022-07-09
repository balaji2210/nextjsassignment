import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";

import styled from "styled-components";

const CheckBox = styled(Checkbox)``;

export const InputCheckBox = (props) => {
	return <CheckBox {...props} />;
};

const FormLabel = styled(FormControlLabel)``;

const FormGroupInput = styled(FormGroup)``;

export const FormInputLabel = (props) => {
	return <FormLabel {...props} />;
};

export const FormGroupLabel = (props) => {
	return <FormGroupInput {...props} />;
};
