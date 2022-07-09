import { InputFiled } from "../textFiled/textFiled.styles";

import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";

export const DateTime = ({ value, onChange }) => {
	return (
		<LocalizationProvider dateAdapter={AdapterDateFns}>
			<DateTimePicker
				renderInput={(props) => <InputFiled {...props} />}
				label="DateTime"
				value={value}
				onChange={onChange}
			/>
		</LocalizationProvider>
	);
};
