import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

type StatusStyleProps = {
	isOnDiet: boolean;
};

export const Container = styled(TouchableOpacity)`
	border: 1px solid ${({theme}) => theme.COLORS.GRAY_500};
	flex-direction: row;
	align-items: center;
	padding: 14px 16px 14px 12px;
	margin-top: 20px;
	border-radius: 6px;
`;

export const Time = styled.Text`
  ${({theme}) => css`
		font-family: ${theme.FONT_FAMILY.BOLD};
		font-size: ${theme.FONT_SIZE.SM}px;
		color: ${theme.COLORS.GRAY_100};
	`}
`;

export const Divider = styled.View`
	width: 1px;
	height: 100%;
	background-color: ${({theme}) => theme.COLORS.GRAY_400};
	margin-left: 12px;
	margin-right: 12px;
`;

export const Name = styled.Text`
	${({theme}) => css`
		font-family: ${theme.FONT_FAMILY.REGULAR};
		font-size: ${theme.FONT_SIZE.MD}px;
		color: ${theme.COLORS.GRAY_200};
		flex: 1;
	`}
`;

export const Status = styled.View<StatusStyleProps>`
	width: 14px;
	height: 14px;
	border-radius: 9999px;
	background-color: ${({theme, isOnDiet}) => 
		isOnDiet
		? theme.COLORS.GREEN
		: theme.COLORS.RED};
`;
