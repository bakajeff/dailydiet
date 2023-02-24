import { useState } from "react";
import { View } from "react-native";

import { Input } from "@components/Input";
import { OptionButton } from "@components/OptionButton";
import { ScreenHeader } from "@components/ScreenHeader";

import {
	Container,
	Content,
	FormColumn,
	Label,
	OptionsContainer,
} from "./styles";
import { Button } from "@components/Button";

export function NewMeal() {
	const [active, setActive] = useState(true);

	function handleToggleActive() {
		setActive((prevState) => !prevState);
	}

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
					<FormColumn>
						<Input label="Data" />
					</FormColumn>

					<View style={{ marginRight: 10, marginLeft: 10 }} />

					<FormColumn>
						<Input label="Hora" />
					</FormColumn>
				</View>

				<Label>Está dentro da dieta?</Label>
				<OptionsContainer>
					<OptionButton
						active={active}
						type="PRIMARY"
						title="Sim"
						onPress={handleToggleActive}
					/>

					<View style={{ marginRight: 4, marginLeft: 4 }} />

					<OptionButton
						active={!active}
						title="Não"
						onPress={handleToggleActive}
					/>
				</OptionsContainer>

				<View style={{ marginTop: 48 }}>
					<Button title="Cadastrar refeição" />
				</View>
			</Content>
		</Container>
	);
}
