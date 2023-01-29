import { MealCard } from "../../components/MealCard";
import { Caption, Container, Content, Data , Label, Title } from "./styles";

export function Statistics () {
	return (
		<Container>
			<MealCard
				color="PRIMARY"
				percent={90.86}
			/>
			<Content>
				<Title>Estatisticas gerais</Title>

				<Data>
					<Label>22</Label>
					<Caption>melhor sequência de pratos dentro da dieta</Caption>
				</Data>

				<Data>
					<Label>109</Label>
					<Caption>refeições registradas</Caption>
				</Data>

				<Data>
					<Label>99</Label>
					<Caption>refeições dentro da dieta</Caption>
				</Data>
				
				<Data>
					<Label>10</Label>
					<Caption>refeições fora da dieta</Caption>
				</Data>
			</Content>
		</Container>
	);
}
