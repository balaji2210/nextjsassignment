import { Slider } from "@mui/material";
import styled from "styled-components";

const InputSlider = styled(Slider)``;

const marks = [
	{
		value: 3,
		label: "3",
	},
	{
		value: 5,
		label: "5",
	},
	{
		value: 7,
		label: "7",
	},
	{
		value: 9,
		label: "9",
	},
	{
		value: 11,
		label: "11",
	},
	{
		value: 13,
		label: "13",
	},
	{
		value: 15,
		label: "15",
	},
];
export const InputSliderButton = (props) => {
	return <InputSlider step={1} min={3} max={15} marks={marks} {...props} />;
};
