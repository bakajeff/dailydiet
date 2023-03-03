import styled, { css } from "styled-components/native";

export type IndicatorStyleProps = "PRIMARY" | "SECONDARY";

type IndicatorProps = {
	type: IndicatorStyleProps;
};

export const Container = styled.ScrollView`
	background-color: ${({ theme }) => theme.COLORS.GRAY_700};
`;

export const Content = styled.View`
	flex: 1;

	background-color: ${({ theme }) => theme.COLORS.GRAY_700};
	
	margin-top: -28px;

	padding: 40px 24px;

	border-top-left-radius: 20px;
	border-top-right-radius: 20px;
`;

export const Title = styled.Text`
	font-size: 20px;
	
	${({ theme }) => css`
		font-family: ${theme.FONT_FAMILY.BOLD};
		color: ${theme.COLORS.GRAY_100};
	`};
	margin-bottom: 8px;
`;

export const Description = styled.Text`
	${({ theme }) => css`
		font-family: ${theme.FONT_FAMILY.REGULAR};
		font-size: ${theme.FONT_SIZE.MD}px;
		color: ${theme.COLORS.GRAY_200};
	`};
	
	margin-bottom: 24px;
`;

export const Label = styled.Text`
	${({ theme }) => css`
		font-family: ${theme.FONT_FAMILY.BOLD};
		font-size: ${theme.FONT_SIZE.SM}px;
		color: ${theme.COLORS.GRAY_200};
	`};
	
	margin-bottom: 8px;
`;

export const Time = styled.Text`
	${({ theme }) => css`
		font-family: ${theme.FONT_FAMILY.REGULAR};
		font-size: ${theme.FONT_SIZE.MD}px;
		color: ${theme.COLORS.GRAY_200};
	`};
	
	margin-bottom: 24px;
`;

export const Tag = styled.View`
	flex-direction: row;

	height: 34px;
	
	background-color: ${({ theme }) => theme.COLORS.GRAY_600};

	align-items: center;
	justify-content: center;

	align-self: flex-start;

	padding: 8px 16px;

	border-radius: 99999px;
`;

export const TagIndicator = styled.View<IndicatorProps>`
	width: 8px;
	height: 8px;

	margin-right: 8px;

	border-radius: 9999px;
	
	background-color: ${({ theme, type }) =>
		type === "PRIMARY" ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
`;

export const TagText = styled.Text`
	${({ theme }) => css`
		font-size: ${theme.FONT_SIZE.SM}px;
		font-family: ${theme.FONT_FAMILY.REGULAR};
	`};
`;
