import { FormLabel, Slider } from "@mui/material";
import { useEffect, useState } from "react";

import { Controller } from "react-hook-form";

const FormInputSlider = ({ name, control, setVlaue, label }) => {
	const [sliderValue, setSLiderValue] = useState(0);

	useEffect(() => {
		if (sliderValue) setVlaue(name, SliderInput);
	}, [sliderValue]);
	// const handelChange = (newValue) => {
	// 	setSLiderValue(newValue);
	// };
	return (
		<>
			<FormLabel component="legend">{label}</FormLabel>
			<Controller
				name={name}
				control={control}
				render={({ field: { onChange, value }, fieldState: { error } }) => {
					return (
						<>
							<Slider
								value={value}
								onChange={onChange}
								valueLabelDisplay="auto"
								min={0}
								max={100}
								step={1}
							/>
							{error ? (
								<FormLabel sx={{ color: "rgb(211, 57, 47)" }}>
									{error?.message}
								</FormLabel>
							) : (
								""
							)}
						</>
					);
				}}
			/>
		</>
	);
};

export default FormInputSlider;
