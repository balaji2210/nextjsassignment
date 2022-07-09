import { InputAdornment } from "@mui/material";
import React, { useState } from "react";
import { SearchContent } from "./searchIcon.styles";
import SearchIcon from "@mui/icons-material/Search";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
	password: yup
		.string()
		.min(8)
		.max(16)
		// .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z\d\s:]).*$/, {
		// 	message:
		// 		"Password need to contain 1 uppercase character (A-Z), 1 lowercase character (a-z), 1 digit (0-9) and 1 special character (punctuation)",
		// })
		.required("password is required"),
});

const Search = () => {
	const [password, setPassword] = useState("");
	const {
		control,
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});
	const submitForm = (data) => {
		console.log(data);
	};

	return (
		<form onSubmit={handleSubmit(submitForm)}>
			<Controller
				name="password"
				control={control}
				render={({ field: { onChange, value }, fieldState: { error } }) => (
					<SearchContent
						placeholder="Search"
						type="text"
						id="password"
						onChange={(e) => {
							setPassword(e.target.value);
						}}
						required
						InputProps={{
							endAdornment: (
								<InputAdornment position="end">
									<SearchIcon />
								</InputAdornment>
							),
						}}
					/>
				)}
			/>
		</form>
	);
};

export default Search;
