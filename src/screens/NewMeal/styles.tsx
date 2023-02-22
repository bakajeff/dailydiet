import styled, { css } from "styled-components/native";

export const Content = styled.View`
	flex: 1;
	background-color: ${({ theme }) => theme.COLORS.WHITE};
	
	margin-top: -28px;

	padding: 40px 24px;

	border-top-left-radius: 20px;
	border-top-right-radius: 20px;
`;

export const Label = styled.Text`
	${({ theme }) => css`
		font-family: ${theme.FONT_FAMILY.BOLD};
		font-size: ${theme.FONT_SIZE.SM}px;
		color: ${theme.COLORS.GRAY_200};
	`};

	margin-bottom: 4px;
`;

export const FormColumn = styled.View`
	flex: 1;
`;

export const OptionsContainer = styled.View`
	flex-direction: row;
`;
