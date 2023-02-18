import styled, { css } from "styled-components/native";

export const Container = styled.View`
	width: 100%;

	padding: 16px;
	
	justify-content: center;
	
	border-radius: 8px;

	align-items: center;
	background-color: ${({theme}) => theme.COLORS.GRAY_600};
`;

export const Data = styled.Text`
	${({ theme }) => css`
		font-size: ${theme.FONT_SIZE.XL}px;
		font-family: ${theme.FONT_FAMILY.BOLD};
		color: ${theme.COLORS.GRAY_100};
	`}

	padding-bottom: 8px;
`;

export const Caption = styled.Text`
	${({ theme }) => css`
		font-size: ${theme.FONT_SIZE.SM}px;
		color: ${theme.COLORS.GRAY_200};
		font-family: ${theme.FONT_FAMILY.REGULAR};
	`}
`;
