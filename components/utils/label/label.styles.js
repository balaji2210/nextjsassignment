import { FormLabel } from "@mui/material";
import styled from "styled-components";

const FormLabelInput = styled(FormLabel)`
	font-size: 1.3rem;
	font-weight: 900;
	color: #505b6f;
`;

export const InputFormLabel = (props) => {
	return <FormLabelInput {...props} />;
};
