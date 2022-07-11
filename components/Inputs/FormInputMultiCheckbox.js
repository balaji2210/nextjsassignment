import { Controller } from "react-hook-form";

import { Checkbox, FormControlLabel } from "@mui/material";

const options = [
	{
		label: "Checkbox option1",
		value: 1,
	},
	{
		label: "Checkbox option 2",
		value: 2,
	},
];

export const FormInputMultiCheckbox = ({ name, label, control }) => {
	return (
		<Controller
			control={control}
			name={name}
			render={({ field: { onChange, value }, fieldState: { error } }) => {
				return (
					<>
						{options.map((option) => {
							return (
								<FormControlLabel
									key={option?.value}
									label={option?.label}
									control={
										<Checkbox
											value={option?.value}
											checked={value?.includes(option?.value)}
											onChange={(event, checked) => {
												if (checked) {
													onChange([...value, event?.target?.value]);
												} else {
													onChange(
														value.filter(
															(value) => value !== event?.target?.value
														)
													);
												}
											}}
										/>
									}
								/>
							);
						})}
						{error ? <span>{error}</span> : ""}
					</>
				);
			}}
		/>
	);
};
