import { MenuItem, Select, FormLabel } from "@mui/material";
import { Controller } from "react-hook-form";
import { FormHelperText } from "@mui/material";

const options = [
	{
		label: "Delhi NCR",
		value: "Delhi NCR",
	},
	{
		label: "Andhra Pradesh",
		value: "Andhra Pradesh",
	},
	{
		label: "Karnataka",
		value: "Karnataka",
	},
	{
		label: "Chennai",
		value: "Chennai",
	},
];

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
		<>
			<FormLabel>{label}</FormLabel>
			<Controller
				render={({ field: { onChange, value }, fieldState: { error } }) => (
					<>
						<Select
							error={!!error}
							name={name}
							sx={{ width: "100%" }}
							onChange={onChange}
							value={value}
						>
							{generateSingleOptions()}
						</Select>
						{error ? (
							<FormHelperText sx={{ color: "rgb(211, 57, 47)" }}>
								{error?.message}
							</FormHelperText>
						) : (
							""
						)}
					</>
				)}
				control={control}
				name={name}
			/>
		</>
	);
};
