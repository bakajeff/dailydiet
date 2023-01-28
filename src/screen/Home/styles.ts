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
