import { Input } from "@components/Input";
import { ScreenHeader } from "@components/ScreenHeader";
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
			</Content>
		</Container>
	);
}
