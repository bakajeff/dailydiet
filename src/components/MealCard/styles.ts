import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

import { ArrowUpRight } from "phosphor-react-native";

export type DietBasedColor = "PRIMARY" | "SECONDARY";

type Props = {
	color: DietBasedColor;
};

export const Container = styled(TouchableOpacity)<Props>`
	${({ theme, color }) =>
		color === "PRIMARY"
			? css`background-color: ${theme.COLORS.GREEN_LIGHT}`
			: css`background-color: ${theme.COLORS.RED_LIGHT}`}

	padding: 20px 16px;

	margin-top: 32px;

	justify-content: center;
	align-items: center;

	border-radius: 8px;
`;

export const Percent = styled.Text`
	${({ theme }) => css`
		font-size: ${theme.FONT_SIZE.XXL}px;
		font-family: ${theme.FONT_FAMILY.BOLD};
		color: ${theme.COLORS.GRAY_100};
	`}
`;

export const Caption = styled.Text`
	${({ theme }) => css`
		font-size: ${theme.FONT_SIZE.SM}px;
		font-family: ${theme.FONT_FAMILY.REGULAR};
		color: ${theme.COLORS.GRAY_200};
	`}
`;

export const Icon = styled(ArrowUpRight).attrs<Props>(({ theme, color }) => ({
	size: 24,
	color: color === "PRIMARY" ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK,
}))`
	position: absolute;
	top: 8px;
	right: 8px;
`;
