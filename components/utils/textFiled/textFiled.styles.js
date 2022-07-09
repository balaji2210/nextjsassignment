import { TextField } from "@mui/material";

import styled from "styled-components";

const Input = styled(TextField)`
	background-color: #f1f4f5;
	.MuiOutlinedInput-root {
		input {
			&::placeholder {
				font-size: 1.2rem;
				font-weight: 700;
				padding-left: 1rem;
			}
		}
	}
`;

export const InputFiled = (props) => {
	return <Input {...props} />;
};
