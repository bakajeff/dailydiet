import { DataCard } from "@components/DataCard";
import { DetailsHeader } from "@components/DetailsHeader";
import { Container, Content, ContentTitle } from "./styles";

export function Details() {
	return (
		<Container>
			<DetailsHeader />

			<Content>
				<ContentTitle>Estatísticas gerais</ContentTitle>

				<DataCard
					data={23}
					caption="melhor sequência de pratos dentro da dieta"
				/>
			</Content>
		</Container>
	);
}
