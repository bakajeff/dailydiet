import { ArrowLeft } from "phosphor-react-native";
import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export type DetailsHeaderStyleProps = "PRIMARY" | "SECONDARY";

type Props = {
	type: DetailsHeaderStyleProps
}

type IconProps = {
	color: DetailsHeaderStyleProps;
}

export const Container = styled.View<Props>`
	background: ${({ theme, type }) =>
		type === "PRIMARY" ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};

	padding: 72px 24px 66px 24px;

	justify-content: center;
	align-items: center;
`;

export const Percent = styled.Text`
	${({theme}) => css`
		font-family: ${theme.FONT_FAMILY.BOLD};
		font-size: ${theme.FONT_SIZE["2XL"]}px;
		color: ${theme.COLORS.GRAY_100};
	`};

	padding-bottom: 2px;
`;

export const Caption = styled.Text`
	${({ theme }) => css`
		font-size: ${theme.FONT_SIZE.SM}px;
		color: ${theme.COLORS.GRAY_200};
		font-family: ${theme.FONT_FAMILY.REGULAR};
	`};
`;

export const ButtonIcon = styled(TouchableOpacity)`
	position: absolute;
	left: 24px;
	top: 54px;
`;

export const Icon = styled(ArrowLeft).attrs<IconProps>(({theme, color}) => ({
	size: 24,
	color: color === "PRIMARY" ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK,
}))``;

