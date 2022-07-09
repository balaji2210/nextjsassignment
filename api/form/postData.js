import axios from "axios";

import { useMutation } from "react-query";

const postData = async (data) => {
	try {
		const response = await axios.post(
			`https://jsonplaceholder.typicode.com/posts`,
			data
		);
		return response;
	} catch (error) {
		return error;
	}
};

const usePostData = () => {
	return useMutation((data) => postData(data));
};

export { usePostData };
