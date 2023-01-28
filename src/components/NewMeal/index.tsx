import { Button, ButtonText, Container, Title, ButtonIcon } from "./styles";

export function NewMeal() {
	return (
		<Container>
			<Title>Refeições</Title>
			<Button>
				<ButtonIcon />
				<ButtonText>Nova refeição</ButtonText>
			</Button>
		</Container>
	);
}
