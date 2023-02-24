import styled, { css } from "styled-components/native";

export const Container = styled.View`
	flex: 1;
`;

export const Content = styled.View`
	flex: 1;
	
	margin-top: -32px;
	padding: 33px 24px;
	
	align-items: center;

	border-top-left-radius: 20px;
	border-top-right-radius: 20px;
	
	background-color: ${({theme}) => theme.COLORS.GRAY_700};
`;

export const ContentTitle = styled.Text`
	${({theme}) => css`
		font-size: ${theme.FONT_SIZE.SM}px;
		font-family: ${theme.FONT_FAMILY.BOLD};
		color: ${theme.COLORS.GRAY_100};
	`}

	padding-bottom: 23px;
`;
