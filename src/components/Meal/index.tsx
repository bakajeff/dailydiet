import { TouchableOpacityProps } from "react-native";
import { Container, Divider, Name, Status, Time } from "./styles";

type Props = TouchableOpacityProps & {
	time: string;
	name: string;
	isOnDiet: boolean;
};

export function Meal({ time, name, isOnDiet, ...rest }: Props) {
	return (
		<Container {...rest}>
			<Time>{time}</Time>

			<Divider />

			<Name>{name}</Name>

			<Status isOnDiet={isOnDiet} />
		</Container>
	);
}
