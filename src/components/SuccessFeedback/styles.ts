import styled, { css } from "styled-components/native";

export const Container = styled.View`
	justify-content: center;
	align-items: center;
`;

export const Heading = styled.Text`
	${({theme}) => css`
		font-family: ${theme.FONT_FAMILY.BOLD};
		font-size: ${theme.FONT_SIZE.XL}px;
		color: ${theme.COLORS.GREEN_DARK};
	`};

	margin-bottom: 8px;
`;

export const Subtitle = styled.Text`
	${({theme}) => css`
		font-family: ${theme.FONT_FAMILY.REGULAR};
		font-size: ${theme.FONT_SIZE.MD}px;
		color: ${theme.COLORS.GRAY_100};
	`}
`;

export const Figure = styled.Image`
	height: 288px;
	width: 224px;

	margin-top: 40px;
	margin-bottom: 48px;
`;
