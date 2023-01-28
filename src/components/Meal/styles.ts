import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

type StatusStyleProps = {
	isOnDiet: boolean;
};

export const Container = styled(TouchableOpacity)`
	flex-direction: row;
	border-radius: 6px;
	border: 1px solid ${({ theme }) => theme.COLORS.GRAY_500};
	padding: 14px 16px 14px 12px;
	align-items: center;
`;

export const Time = styled.Text`
	${({ theme }) => css`
		color: ${theme.COLORS.GRAY_100};
		font-family: ${theme.FONT_FAMILY.BOLD};
		font-size: ${theme.FONT_SIZE.XS}px;
		`}
		`;

export const Divider = styled.View`
	margin-left: 12px;
	margin-right: 12px;
	width: 1px;
	height: 100%;
	background-color: ${({ theme }) => theme.COLORS.GRAY_400};
`;

export const Name = styled.Text`
	flex: 1;
	${({ theme }) => css`
		color: ${theme.COLORS.GRAY_200};
		font-family: ${theme.FONT_FAMILY.REGULAR};
		font-size: ${theme.FONT_SIZE.MD}px;
	`}
`;

export const Status = styled.View<StatusStyleProps>`
	width: 14px;
	height: 14px;
	border-radius: 99999px;

	${({ theme, isOnDiet }) =>
		isOnDiet
			? css`background-color: ${theme.COLORS.GREEN}`
			: css`background-color: ${theme.COLORS.RED}`}
`;
