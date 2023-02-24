import { DataCard } from "@components/DataCard";
import { DetailsHeader } from "@components/DetailsHeader";
import { View } from "react-native";
import { Container, Content, ContentTitle } from "./styles";

export function Statistics() {
	return (
		<Container>
			<DetailsHeader />

			<Content>
				<ContentTitle>Estatísticas gerais</ContentTitle>

				<DataCard
					data={23}
					caption="melhor sequência de pratos dentro da dieta"
				/>

				<DataCard data={109} caption="refeições registradas" />

				<View
					style={{
						flexDirection: "row",
					}}
				>
					<DataCard
						type="PRIMARY"
						data={99}
						caption="refeições dentro da dieta"
					/>

					<View style={{ marginRight: 6, marginLeft: 6 }} />

					<DataCard
						type="SECONDARY"
						data={10}
						caption="refeições fora da dieta"
					/>
				</View>
			</Content>
		</Container>
	);
}
