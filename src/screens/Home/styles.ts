import styled, {css} from "styled-components/native";

export const Container = styled.View`
	padding: 0 24px;
`;

export const MealHeader = styled.Text`
	${({theme}) => css`
		font-size: ${theme.FONT_SIZE.MD}px;
		font-family: ${theme.FONT_FAMILY.REGULAR};
		color: ${theme.COLORS.GRAY_100};
	`};
	margin-top: 40px;
`;

export const SectionHeader = styled.Text`
	${({theme}) => css`
		font-size: ${theme.FONT_SIZE.LG}px;
		font-family: ${theme.FONT_FAMILY.BOLD};
		color: ${theme.COLORS.GRAY_100};
	`}

	margin-top: 32px;
`;
