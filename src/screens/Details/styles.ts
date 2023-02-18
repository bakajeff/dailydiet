import styled from "styled-components/native";

export const Container = styled.View``;

export const Content = styled.View`
	width: 100%;
	
	margin-top: -32px;
	padding: 33px 24px;
	
	align-items: center;

	border-top-left-radius: 20px;
	border-top-right-radius: 20px;
	
	background-color: ${({theme}) => theme.COLORS.WHITE};
`;
