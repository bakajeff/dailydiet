import { Input } from "@components/Input";
import { ScreenHeader } from "@components/ScreenHeader";
import { View } from "react-native";
import { Container, Content } from "./styles";

export function NewMeal() {
	return (
		<Container>
			<ScreenHeader title="Nova refeição" />

			<Content>
				<Input label="Nome" />

				<Input
					label="Descrição"
					textAlignVertical="top"
					multiline
					numberOfLines={4}
				/>

				<View
					style={{
						flexDirection: "row",
					}}
				>
					<Input label="Data" />

					<View style={{ marginRight: 10, marginLeft: 10 }} />

					<Input label="Hora" />
				</View>
			</Content>
		</Container>
	);
}
