import { ScreenHeader } from "@components/ScreenHeader";

import {
	Container,
	Content,
	Description,
	Label,
	Tag,
	TagIndicator,
	TagText,
	Time,
	Title,
} from "./styles";

export function Meal() {
	return (
		<Container>
			<ScreenHeader title="Refeição" />

			<Content>
				<Title>Sanduíche</Title>
				<Description>
					Sanduíche de pão integral com atum e salada de alface e tomate
				</Description>

				<Label>Data e hora</Label>
				<Time>12/08/2022 às 16:00</Time>

				<Tag>
					<TagIndicator type="PRIMARY" />
					<TagText>dentro da dieta</TagText>
				</Tag>
			</Content>
		</Container>
	);
}
