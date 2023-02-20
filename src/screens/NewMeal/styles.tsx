import styled from "styled-components/native";

export const Container = styled.View`
	flex: 1;
`;

export const Content = styled.View`
	background-color: ${({ theme }) => theme.COLORS.WHITE};
	
	margin-top: -28px;

	padding: 40px 24px;

	border-radius: 20px;
`;
