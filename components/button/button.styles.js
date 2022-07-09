import { Button } from "@mui/material";
import styled from "styled-components";

const ButtonCreate = styled(Button)`
	height: 2rem;
	margin-top: 1.5rem;
	margin-right: 0.5rem;

	color: #fff;
`;

export const CreateButton = (props) => {
	return <ButtonCreate {...props} />;
};
