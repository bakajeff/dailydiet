import { DetailsHeader } from "@components/DetailsHeader";
import { Text } from "react-native";
import { Container, Content, ContentTitle } from "./styles";

export function Details() {
	return (
		<Container>
			<DetailsHeader />
			<Content>
				<ContentTitle>Estatísticas gerais</ContentTitle>
			</Content>
		</Container>
	);
}
