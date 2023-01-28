import { Container, Name, Divider, Status, Time } from "./styles";

export function Meal() {
	return (
		<Container>
			<Time>20:00</Time>
			<Divider />
			<Name>X-tudo</Name>
			<Status isOnDiet={false} />
		</Container>
	);
}
