import { TouchableOpacityProps } from "react-native";
import {
	Caption,
	Container,
	Icon,
	Percent,
	PercentCardStyleProps,
} from "./styles";

type Props = TouchableOpacityProps & {
	percent: string;
	type: PercentCardStyleProps;
};

export function PercentCard({ percent, type = "SECONDARY", ...rest }: Props) {
	return (
		<Container type={type} {...rest}>
			<Icon color={type} />
			<Percent>{percent}%</Percent>
			<Caption>das refeições dentro da dieta</Caption>
		</Container>
	);
}
