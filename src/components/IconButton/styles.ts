import { PencilSimpleLine } from "phosphor-react-native";
import { TouchableOpacity } from "react-native";
import styled, {css} from "styled-components/native";

export const Container = styled(TouchableOpacity)`
	flex-direction: row;
	justify-content: center;
	align-items: center;
	background-color: ${({theme}) => theme.COLORS.GRAY_200};
	padding: 16px 24px;
	margin-top: 8px;
	border-radius: 6px;
`;

export const ButtonText = styled.Text`
	${({theme}) => css`
		font-size: ${theme.FONT_SIZE.SM}px;
		font-family: ${theme.FONT_FAMILY.BOLD};
		color: ${theme.COLORS.WHITE};
	`}
`;

export const EditIcon = styled(PencilSimpleLine).attrs(({theme}) => ({
	size: 18,
	color: theme.COLORS.WHITE,
}))`
	margin-right: 14px;
`;
