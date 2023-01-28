import { Container, Name, Divider, Status, Time } from "./styles";

type Props = {
	hour: string;
	name: string;
	isOnDiet: boolean;
};

export function Meal({ hour, name, isOnDiet }: Props) {
	return (
		<Container>
			<Time>{hour}</Time>
			<Divider />
			<Name>{name}</Name>
			<Status isOnDiet={isOnDiet} />
		</Container>
	);
}