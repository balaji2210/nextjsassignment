import {
	FormControl,
	FormControlLabel,
	FormLabel,
	Radio,
	RadioGroup,
	FormHelperText,
} from "@mui/material";
import { setDayWithOptions } from "date-fns/fp";

import { Controller } from "react-hook-form";

import { InputWrapper } from "../../containers/FormContainer.styles";

import { ErrorIcon } from "../utils";

const options = [
	{
		id: 1,
		label: "First Year",
		value: "First Year",
	},
	{
		id: 2,
		label: "Second Year",
		value: "Second Year",
	},
	{
		id: 3,
		label: "Third Year",
		value: "Third Year",
	},
	{
		id: 4,
		label: "Fourth Year",
		value: "Fourth Year",
	},
];

const FormInputRadio = ({ name, label, control }) => {
	const generetaeRadioOptions = () => {
		return options.map((option) => (
			<FormControlLabel
				key={option.id}
				value={option.value}
				label={option.label}
				control={<Radio />}
			/>
		));
	};
	return (
		<>
			<FormLabel>{label}</FormLabel>
			<Controller
				name={name}
				control={control}
				render={({ field: { onChange, value }, fieldState: { error } }) => (
					<>
						<RadioGroup value={value} onChange={onChange} label={label}>
							{generetaeRadioOptions()}
						</RadioGroup>
						{error ? (
							<FormHelperText sx={{ color: "rgb(211, 57, 47)" }}>
								{error?.message}
							</FormHelperText>
						) : (
							""
						)}
					</>
				)}
			/>
		</>
	);
};

export default FormInputRadio;
