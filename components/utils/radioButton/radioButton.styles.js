import { RadioGroup } from "@mui/material";

import styled from "styled-components";

const InputRadioButton = styled(RadioGroup)``;

export const RadioGroupButton = (props) => {
	return <InputRadioButton {...props} />;
};
