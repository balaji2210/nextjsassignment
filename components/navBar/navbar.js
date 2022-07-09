import React, { useEffect, useState } from "react";
import { Wraper, Brand, Text } from "./navbar.styles";
import Search from "../searchIcon/searchIcon";
import axios from "axios";
import { useQuery } from "react-query";

import { CreateButton } from "../button/button.styles";

import { usePostData } from "../../api/postData";
import { useGetData } from "../../api/getData";

const Navbar = () => {
	// const { mutateAsync: createProject } = usePostData();

	// const { data } = useGetData();

	// const proj = async () => {
	// 	const res = await createProject();
	// 	console.log("Res", res);
	// };

	// console.log("data", data);
	// useEffect(() => {
	// 	proj();
	// }, []);

	return (
		<>
			<Wraper>
				<Brand>
					<Text>Mflix</Text>
				</Brand>
				<Search />
				<CreateButton variant="outlined">Create</CreateButton>
			</Wraper>
		</>
	);
};

export default Navbar;
