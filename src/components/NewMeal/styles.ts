import { TouchableOpacity } from "react-native";

import styled, { css } from "styled-components/native";

import { Plus } from "phosphor-react-native";

export const Container = styled.View`
	margin-top: 40px;
`;

export const Title = styled.Text`
	${({ theme }) => css`
		color: ${theme.COLORS.GRAY_100};
		font-size: ${theme.FONT_SIZE.MD}px;
		font-family: ${theme.FONT_FAMILY.REGULAR};
	`}

	margin-bottom: 8px;
`;

export const Button = styled(TouchableOpacity)`	
	flex-direction: row;
	justify-content: center;
	align-items: center;

	background-color: ${({ theme }) => theme.COLORS.GRAY_200};
	padding: 16px 24px;

	border-radius: 6px;
`;

export const ButtonText = styled.Text`
	${({ theme }) => css`
		color: ${theme.COLORS.WHITE};
		font-size: ${theme.FONT_SIZE.SM}px;
		font-family: ${theme.FONT_FAMILY.BOLD};
	`}
`;

export const ButtonIcon = styled(Plus).attrs(({ theme }) => ({
	color: theme.COLORS.WHITE,
	size: 18,
}))`
	margin-right: 12px;
`;
