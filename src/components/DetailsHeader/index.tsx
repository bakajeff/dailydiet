import { ButtonIcon, Caption, Container, Icon, Percent } from "./styles";

export function DetailsHeader() {
	return (
		<Container type="PRIMARY">
			<ButtonIcon>
				<Icon color="PRIMARY" />
			</ButtonIcon>
			<Percent>90,86%</Percent>
			<Caption>das refeições dentro da dieta</Caption>
		</Container>
	);
}
