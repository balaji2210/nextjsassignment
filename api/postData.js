// import axios from "axios";
// import { useMutation } from "react-query";

// const postData = async () => {
// 	let axiosConfig = {
// 		headers: {
// 			Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYzZjYjgzYmNlZjY4ZDA2YmExZjU5MSIsImlhdCI6MTY1NzE5NTQwOH0.7jZRxE7fcwGOrnF8PWxWXrtLnYJf6BstOyloaRXOtE8`,
// 		},
// 	};
// 	try {
// 		const response = await axios.post(
// 			"https://myways2210.herokuapp.com/api/v1/create/project",
// 			{
// 				name: "Flask",
// 				skills: ["python"],
// 			},
// 			axiosConfig
// 		);
// 		return response;
// 	} catch (error) {
// 		return error;
// 	}
// };

// export const usePostData = () => {
// 	return useMutation(postData);
// };
