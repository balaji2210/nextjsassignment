import React from "react";
import { MenuItem, Select } from "@mui/material";

import { InputWrapper } from "../../../containers/FormContainer.styles";

export const FormInputDropdown = ({ name, control, label }) => {
	const generateSingleOptions = () => {
		return options.map((option) => {
			return (
				<MenuItem key={option.value} value={option.value}>
					{option.label}
				</MenuItem>
			);
		});
	};

	return (
		<InputWrapper>
			<>
				<Select name={name} sx={{ width: "100%" }}>
					{generateSingleOptions()}
				</Select>
			</>
		</InputWrapper>
	);
};
