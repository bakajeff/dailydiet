import styled from "styled-components/native";

export const Container = styled.View`
	flex-direction: row;
	justify-content: space-between;

	padding: 66px 24px;
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
