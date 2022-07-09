import { Button } from "@mui/material";
import styled from "styled-components";

const StyledButton = styled(Button)``;

export const InputButton = (props) => {
	return <StyledButton {...props} />;
};
