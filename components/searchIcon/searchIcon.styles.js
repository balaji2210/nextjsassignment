import { TextField } from "@mui/material";
import styled from "styled-components";

const Search = styled(TextField)`
	background-color: #fff;
	height: 60px;
	margin: 15px;

	.MuiOutlinedInput-root {
		fieldset {
			border-color: red !important;
			border-radius: 30px;
		}
		&:hover fieldset {
			border-color: red !important;
		}
		.Mui-focused fieldset {
			border-color: red !important;
		}
	}
`;

export const SearchContent = (props) => {
	return <Search {...props} />;
};
