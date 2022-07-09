import { InputFiled } from "../textFiled/textFiled.styles";

import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export const DOB = ({ value }) => {
	return (
		<LocalizationProvider dateAdapter={AdapterDateFns}>
			<DatePicker
				label="DOB"
				value={value}
				renderInput={(params) => <InputFiled {...params} />}
			/>
		</LocalizationProvider>
	);
};
