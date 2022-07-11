import { Form } from "./FormContainer.styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import YupPassword from "yup-password";
YupPassword(yup);

import { FormInputText } from "../components/Inputs/FormInputsText";
import { InputButton } from "../components/utils/button/button.styles";
import { FormInputDropdown } from "../components/Inputs/FormInputDropdown";
import { FormInputDate } from "../components/Inputs/FormInputDate";
import { FormInputMultiCheckbox } from "../components/Inputs/FormInputMultiCheckbox";
import EmailIcon from "@mui/icons-material/Email";
import KeyIcon from "@mui/icons-material/Key";
import {
	InputCheckBox,
	FormGroupLabel,
	FormInputLabel,
} from "../components/utils/checkBox/checkBox.styles";

import { RadioGroupButton } from "../components/utils/radioButton/radioButton.styles";

import { DateTime } from "../components/utils/dateTime/dateTime.styles";
import { DOB } from "../components/utils/datePicker/datePicker.styles";
import { getUsersData } from "../api/form/getUsers";

import { InputSliderButton } from "../components/utils/slider/slider.styles";
import { useEffect } from "react";
import FormInputRadio from "../components/Inputs/FormInputRadio";
import FormInputSlider from "../components/Inputs/FormInputSlider";
import { usePostData } from "../api/form/postData";
const defaultValues = {
	name: "",
	phone: "",
	githublink: "",
	email: "",
	password: "",
	dropdown: "",
	radio: "",
	slider: 20,
	date: "",
};
const phoneRegExp =
	/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const regMatch =
	"^(?!mailto:)(?:(?:http|https|ftp)://)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$";
const digitsOnly = (value) => /^\d+$/.test(value);
yup
	.string()
	.test("Digits only", "The field should not have digits", digitsOnly);
const FormSchema = yup.object().shape({
	name: yup
		.string()
		.matches(
			/^[aA-zZ\s]+$/,
			"Name should not contain numbers and Special Characters"
		)
		.max(255, "Max characters allowed")
		.min(3)
		.required("Name is required"),
	phone: yup
		.string()
		.matches(phoneRegExp, "Pease Enter a Valid Phone Number")
		.min(10, "to short")
		.max(11, "to long")
		.required(),
	githublink: yup
		.string()
		.matches(regMatch, "URL is not valid")
		.max(255, "Max characters allowed")
		.required("GithubLink is required"),
	email: yup
		.string()
		.email("Field should containa valid email")
		.required("Enter a Valid Email"),
	password: yup
		.string()
		.minUppercase(1, "Password Should Contain atleast one UpperCase Letter")
		.min(6, "Password should contain atleast 6 characters")
		.minSymbols(1, "Password Should Contain atleast one Symbol")
		.minNumbers(1, "Password Should Contain atleast one Number ")
		.max(12, "Password should not contain more than 12 characters")
		.required("password is required"),
	dropdown: yup.string().required("Dropdown cannot be empty"),
	radio: yup.string().required("Radio box cannot be Empty"),
	slider: yup
		.number()
		.min(11, "Value Should be atleast 11")
		.required("Slider value should be min 11"),
	date: yup.string().required("Date Filed Cannot be empty"),
});
const FormContainer = () => {
	const { data: usersData } = getUsersData();
	const { mutateAsync: createData } = usePostData();

	const { handleSubmit, reset, control, setValue, watch } = useForm({
		defaultValues: defaultValues,
		resolver: yupResolver(FormSchema),
	});

	useEffect(() => {
		console.log("UsersData", usersData);
		if (usersData) {
			setValue("name", usersData?.data?.[0]?.name);
		}
	}, [usersData]);

	const handelData = async (data) => {
		console.log("Data>>>>", data);
		const response = await createData(data);
		console.log("POST DATA RESPONSE>>>>", response?.data);
	};

	return (
		<Form onSubmit={handleSubmit(handelData)}>
			<FormInputText
				placeholder="name"
				name="name"
				control={control}
				label="Name"
			/>
			<br />
			<br />
			<FormInputText
				placeholder="Phone No"
				name="phone"
				control={control}
				label="Phone No"
			/>
			<br />
			<br />
			<FormInputText
				placeholder="GithubLink"
				name="githublink"
				control={control}
				label="githublink"
			/>
			<br />
			<br />
			{/* <FormInputMultiCheckbox
				control={control}
				name="checkbox"
				placeholder="CheckBox"
				label="Checkbox"
			/> */}
			<br />

			<FormInputRadio
				name="radio"
				control={control}
				label="Which Year are you in?"
			/>
			<br />
			<FormInputDropdown
				control={control}
				name="dropdown"
				label="Select your Current Location of residence"
			/>
			<br />
			<br />
			<FormInputDate
				control={control}
				name="date"
				label="Date"
				placeholder="Date"
			/>
			<br />
			<br />
			{/* <DateTime /> */}

			<FormInputSlider
				control={control}
				name="slider"
				defaultValue={20}
				label="Salary Range  "
			/>
			<br />
			<br />
			<FormInputText
				placeholder="yourname@gmail.com"
				name="email"
				control={control}
				label="E-mail"
				Component={<EmailIcon />}
			/>
			<br />
			<br />
			<FormInputText
				placeholder="*********"
				name="password"
				control={control}
				label="Password"
				type="password"
				Component={<KeyIcon />}
			/>
			<br />
			<br />
			<InputButton type="submit" fullWidth variant="contained">
				Submit
			</InputButton>
			<br />
			<br />
			<InputButton
				onClick={() => {
					reset();
				}}
				fullWidth
				variant="contained"
			>
				Reset
			</InputButton>
		</Form>
	);
};

export default FormContainer;
