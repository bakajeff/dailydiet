import { useState } from "react";
import { View } from "react-native";

import { Input } from "@components/Input";
import { OptionButton } from "@components/OptionButton";
import { ScreenHeader } from "@components/ScreenHeader";

import { Content, Label, OptionsContainer } from "./styles";

export function NewMeal() {
	const [active, setActive] = useState(true);

	function handleToggleActive() {
		setActive((prevState) => !prevState);
	}

	return (
		<>
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
			</Content>
		</>
	);
}
