import styled, { css } from "styled-components/native";

export const Container = styled.View`
 flex: 1;

 padding: 0 24px;
`;

export const SectionHeader = styled.Text`
	${({ theme }) => css`
		color: ${theme.COLORS.GRAY_100};
		font-family: ${theme.FONT_FAMILY.BOLD};
		font-size: ${theme.FONT_SIZE.LG}px;
	`}
	margin-bottom: 8px;
	margin-top: 32px;
`;

export const Header = styled.View`
	flex-direction: row;
	justify-content: space-between;

	margin-top: 66px;
`;

export const Logo = styled.Image`
	width: 82px;
	height: 37px;
`;

export const Profile = styled.Image`
	width: 40px;
	height: 40px;
	
	border-radius: 99999px;
	border: 2px solid ${({ theme }) => theme.COLORS.GRAY_200};
`;
