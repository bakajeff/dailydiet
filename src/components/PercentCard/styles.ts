import { ArrowUpRight } from "phosphor-react-native";
import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export type PercentCardStyleProps = "PRIMARY" | "SECONDARY";

type Props = {
	type: PercentCardStyleProps;
};

type IconProps = {
	color: PercentCardStyleProps;
};

export const Container = styled(TouchableOpacity)<Props>`
	padding: 20px 16px;
	align-items: center;
	background: ${({ theme, type }) =>
		type === "PRIMARY" ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
	border-radius: 8px;
`;

export const Percent = styled.Text`
	${({ theme }) => css`
		font-size: ${theme.FONT_SIZE["2XL"]}px;
		font-family: ${theme.FONT_FAMILY.BOLD};
		color: ${theme.COLORS.GRAY_100};
	`}
`;

export const Caption = styled.Text`
	${({ theme }) => css`
		font-size: ${theme.FONT_SIZE.SM}px;
		color: ${theme.COLORS.GRAY_200};
		font-family: ${theme.FONT_FAMILY.REGULAR};
	`}
`;

export const Icon = styled(ArrowUpRight).attrs<IconProps>(
	({ theme, color }) => ({
		size: 24,
		color:
			color === "PRIMARY" ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK,
	}),
)`
	position: absolute;
	right: 8px;
	top: 8px;
`;
