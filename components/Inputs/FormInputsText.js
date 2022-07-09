import { InputFiled } from "../utils/textFiled/textFiled.styles";
import { Controller } from "react-hook-form";
import { InputFormLabel } from "../utils/label/label.styles";
import InputAdornment from "@mui/material/InputAdornment";
import { FormLabel } from "@mui/material";

export const FormInputText = ({
	name,
	control,
	label,
	type,
	placeholder,
	Component,
}) => {
	return (
		<>
			<InputFormLabel>{label}</InputFormLabel>
			<Controller
				name={name}
				control={control}
				render={({ field: { onChange, value }, fieldState: { error } }) => (
					<>
						<InputFiled
							error={!!error}
							onChange={onChange}
							value={value}
							fullWidth
							variant="outlined"
							placeholder={placeholder}
							type={type}
							sx={{ mt: 2 }}
							InputProps={{
								startAdornment: (
									<InputAdornment position="start">{Component}</InputAdornment>
								),
							}}
						/>
						{error ? (
							<FormLabel sx={{ color: "rgb(211, 57, 47)" }}>
								{error?.message}
							</FormLabel>
						) : (
							""
						)}
					</>
				)}
			/>
		</>
	);
};
