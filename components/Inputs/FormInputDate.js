import { InputFiled } from "../utils/textFiled/textFiled.styles";

import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";

import { FormHelperText, FormLabel } from "@mui/material";

import { Controller } from "react-hook-form";

import moment from "moment";

export const FormInputDate = ({ name, label, control, placeholder }) => {
	return (
		<LocalizationProvider dateAdapter={AdapterDateFns}>
			<FormLabel>{label}</FormLabel>
			<Controller
				name={name}
				control={control}
				defaultValue={null}
				render={({ field: { onChange, value }, fieldState: { error } }) => (
					<>
						<MobileDatePicker
							onChange={(value) => onChange(moment(value).format("DD/MM/YYYY"))}
							renderInput={(params) => {
								const inputProps = params.inputProps;
								inputProps.value = value;
								return (
									<>
										<InputFiled
											{...params}
											fullWidth
											placeholder={placeholder}
										/>
									</>
								);
							}}
						/>
						{error ? <FormHelperText>{error?.message}</FormHelperText> : ""}
					</>
				)}
			/>
		</LocalizationProvider>
	);
};
