import { ArrowLeft } from "phosphor-react-native";
import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";


export type ScreenHeaderStyleProps = "DEFAULT" | "PRIMARY" | "SECONDARY";

type Props = {
	type: ScreenHeaderStyleProps
}

type IconProps = {
	color: string; 
}

export const Container = styled.View<Props>`
	flex-direction: row;

	padding: 57px 24px 52px 24px;

	align-items: center;
	justify-content: space-between;

	background-color: ${({theme}) => theme.COLORS.GRAY_600};

	${({type}) => 
		type === "PRIMARY" && css` background-color: ${({theme}) => theme.COLORS.GREEN_LIGHT};`
	};

	${({type}) => 
		type === "SECONDARY" && css` background-color: ${({theme}) => theme.COLORS.RED_LIGHT};`
	};
`;

export const Title = styled.Text`
	${({theme}) => css`
		font-family: ${theme.FONT_FAMILY.BOLD};
		font-size: ${theme.FONT_SIZE.LG}px;
		color: ${theme.COLORS.GRAY_100};
	`}
	padding-bottom: 2px;
`;

export const ButtonIcon = styled(TouchableOpacity)``;

export const Icon = styled(ArrowLeft).attrs<IconProps>(({theme, color}) => ({
	size: 24,
	color,
}))``;

