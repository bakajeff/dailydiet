import styled, { css } from "styled-components/native";

export const Container = styled.View`
	flex: 1;
`;

export const Content = styled.View`
	background-color: ${({ theme }) => theme.COLORS.WHITE};
	
	margin-top: -28px;

	padding: 40px 24px;

	border-radius: 20px;
`;

export const Label = styled.Text`
	${({ theme }) => css`
		font-family: ${theme.FONT_FAMILY.BOLD};
		font-size: ${theme.FONT_SIZE.SM}px;
		color: ${theme.COLORS.GRAY_200};
	`};

	margin-bottom: 4px;
`;

export const OptionsContainer = styled.View`
	flex-direction: row;
	justify-content: space-between;
`;
