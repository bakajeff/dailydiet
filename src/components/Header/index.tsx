import { Container, Logo, Profile } from "./styles";

import logoImg from "../../assets/logo.png";

export function Header() {
	return (
		<Container>
			<Logo source={logoImg} />
			<Profile source={{ uri: "https://github.com/bakajeff.png" }} />
		</Container>
	);
}
