import { Container, Logo, ProfilePicture } from "./styles";

import LogoImg from "@assets/logo.png";

export function HomeHeader() {
	return (
		<Container>
			<Logo source={LogoImg} />
			<ProfilePicture source={{ uri: "https://github.com/bakajeff.png" }} />
		</Container>
	);
}
