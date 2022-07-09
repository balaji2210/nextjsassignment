import styled from "styled-components";

export const Wraper = styled.nav`
	display: flex !important;
	flex-direction: row;
	justify-content: flex-end;
	background-color: #fff;
`;

export const Input = styled.input`
	margin-right: 1rem;
	background-color: #fff;
	height: 30px;
	margin-top: 20px;
	border-radius: 10px;
	&::placeholder {
		color: #000;
	}
	font-size: 15px;
	border: none;
	outline: none;
`;

export const Brand = styled.div`
	margin-right: auto;
	padding: 1rem;
`;

export const Text = styled.h4`
	font-weight: 400;
	font-size: 1.8rem;
	color: red;
`;
