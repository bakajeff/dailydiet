import { DetailsHeader } from "@components/DetailsHeader";
import { Text } from "react-native";
import { Container, Content } from "./styles";

export function Details() {
	return (
		<Container>
			<DetailsHeader />
			<Content>
				<Text>Conteudo</Text>
			</Content>
		</Container>
	);
}
