import { PencilSimpleLine, Trash } from "phosphor-react-native";
import { TouchableOpacity } from "react-native";
import styled, {css} from "styled-components/native";

export type ContainerStyleProps = "SOLID" | "OUTLINED";

type Props = {
	variant: ContainerStyleProps;
}

const solidBackgroundStyle = css`
	background-color: ${({theme}) => theme.COLORS.GRAY_200};
`;

const outlinedBackgroundStyle = css`
	background-color: ${({theme}) => theme.COLORS.WHITE};
	border: 1px solid ${({theme}) => theme.COLORS.GRAY_100};
`;

export const Container = styled(TouchableOpacity)<Props>`
	flex-direction: row;
	justify-content: center;
	align-items: center;
	
	padding: 16px 24px;
	margin-top: 9px;
	
	border-radius: 6px;
	
	${({variant}) => variant === "SOLID" ? solidBackgroundStyle : outlinedBackgroundStyle}
`;

export const ButtonText = styled.Text<Props>`
	${({theme, variant}) => css`
		font-size: ${theme.FONT_SIZE.SM}px;
		font-family: ${theme.FONT_FAMILY.BOLD};
		color: ${variant === "SOLID" ? theme.COLORS.WHITE : theme.COLORS.GRAY_100};
	`};
`;

export const EditIcon = styled(PencilSimpleLine).attrs(({theme}) => ({
	size: 18,
	color: theme.COLORS.WHITE,
}))`
	margin-right: 14px;
`;

export const DeleteIcon = styled(Trash).attrs(({theme}) => ({
	size: 18,
	color: theme.COLORS.GRAY_100,
}))`
	margin-right: 14px;
`;
