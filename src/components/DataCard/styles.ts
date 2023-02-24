import styled, { css } from "styled-components/native";

export type ContainerStyleProps = "PRIMARY" | "SECONDARY";

type Props = {
	type?: ContainerStyleProps;
	fullWidth?: boolean;
}

export const Container = styled.View<Props>`

	${({fullWidth}) => fullWidth && css`
		flex: 1;
	`};

	padding: 16px;
	margin-bottom: 12px;

	justify-content: center;
	align-items: center;

	align-self: stretch;

	border-radius: 8px;

	background-color: ${({theme}) => theme.COLORS.GRAY_600};

	${({type}) => 
		type === "PRIMARY" && css` background-color: ${({theme}) => theme.COLORS.GREEN_LIGHT};`
	};

	${({type}) => 
		type === "SECONDARY" && css` background-color: ${({theme}) => theme.COLORS.RED_LIGHT};`
	};
`;

export const Data = styled.Text`
	${({ theme }) => css`
		font-size: ${theme.FONT_SIZE.XL}px;
		font-family: ${theme.FONT_FAMILY.BOLD};
		color: ${theme.COLORS.GRAY_100};
	`}

	padding-bottom: 8px;
`;

export const Caption = styled.Text`
	${({ theme }) => css`
		font-size: ${theme.FONT_SIZE.SM}px;
		color: ${theme.COLORS.GRAY_200};
		font-family: ${theme.FONT_FAMILY.REGULAR};
	`}
	text-align: center;
`;
