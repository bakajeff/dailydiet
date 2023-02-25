import { Pressable } from "react-native";
import styled, { css } from "styled-components/native";

export type IndicatorStyleProps = "PRIMARY" | "SECONDARY";

type IndicatorProps = {
	type: IndicatorStyleProps
}

type ContainerProps = {
  type: IndicatorStyleProps;
	active: boolean;
}

export const Container = styled(Pressable)<ContainerProps>`
	flex-direction: row;
	
	flex-grow: 1;
	flex-shrink: 1;

	align-items: center;
	justify-content: center;

	background-color: ${({theme}) => theme.COLORS.GRAY_600};

	${({type, active, theme}) => 
		(active && type === "PRIMARY")
			&& css`
				background-color:  ${theme.COLORS.GREEN_LIGHT};
				border: 1px solid ${theme.COLORS.GREEN_DARK};
			`};

	${({type, active, theme}) => 
		(active && type === "SECONDARY")
			&& css`
				background-color: ${theme.COLORS.RED_LIGHT};
				border: 1px solid ${theme.COLORS.RED_DARK};
			`};

	padding: 16px;
	border-radius: 6px;
`;

export const Indicator = styled.View<IndicatorProps>`
	width: 8px;
	height: 8px;

	margin-right: 8px;

	border-radius: 9999px;
	
	background-color: ${({theme, type}) => type === "PRIMARY" 
	? theme.COLORS.GREEN_DARK
	: theme.COLORS.RED_DARK }
`;

export const Title = styled.Text`
	${({theme}) => css`
		font-size: ${theme.FONT_SIZE.SM}px;
		font-family: ${theme.FONT_FAMILY.BOLD};
	`};
`;
