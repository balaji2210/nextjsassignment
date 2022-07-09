import { useQuery } from "react-query";

import axios from "axios";

const getUsers = async () => {
	try {
		const response = await axios.get(
			`https://jsonplaceholder.typicode.com/users`
		);
		return response;
	} catch (error) {
		return error;
	}
};

export const getUsersData = () => {
	return useQuery("users", getUsers, {
		refetchOnWindowFocus: false,
	});
};
