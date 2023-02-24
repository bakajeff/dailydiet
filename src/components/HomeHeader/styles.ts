import styled from "styled-components/native";

export const Container = styled.View`
	width: 100%;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	padding-top: 64px;
	padding-bottom: 36px;
`;

export const Logo = styled.Image`
	width: 82px;
	height: 37px;
`;

export const ProfilePicture = styled.Image`
	width: 40px;
	height: 40px;
	border: 1px solid ${({ theme }) => theme.COLORS.GRAY_200};
	border-radius: 99999px;
`;
