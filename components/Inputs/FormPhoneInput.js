import { InputFiled } from "../utils/textFiled/textFiled.styles";
import { Controller } from "react-hook-form";

export const FormPhoneInput = ({ name, control, label }) => {
	return (
		<Controller
			name={name}
			control={control}
			render={({ field: { onChange, value }, fieldState: { error } }) => (
				<InputFiled
					error={!!error}
					helperText={error ? error?.message : null}
					onChange={onChange}
					value={value}
					fullWidth
					variant="outlined"
					label={label}
				/>
			)}
		/>
	);
};
