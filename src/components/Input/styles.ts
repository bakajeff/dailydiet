import styled, { css } from "styled-components/native";

export const Container = styled.View`
	flex-shrink: 1;
	flex-grow: 1;
	margin-bottom: 24px;
	align-self: stretch;
`;

export const Label = styled.Text`
	${({theme}) => css`
		font-family: ${theme.FONT_FAMILY.BOLD};
		font-size: ${theme.FONT_SIZE.SM}px;
		color: ${theme.COLORS.GRAY_200};
	`};

	margin-bottom: 4px;
`;

export const Field = styled.TextInput`
	padding: 14px;

	border-radius: 6px;
	
	${({theme}) => css`
		border: 1px solid ${({theme}) => theme.COLORS.GRAY_500};
		font-family: ${theme.FONT_FAMILY.REGULAR};
		font-size: ${theme.FONT_SIZE.MD}px;
		color: ${theme.COLORS.GRAY_100};
	`};
`;
