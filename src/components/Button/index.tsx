import { TouchableOpacityProps } from "react-native";
import { ButtonText, Container } from "./styles";

type Props = TouchableOpacityProps & {
	title: string;
};

export function Button({ title, ...rest }: Props) {
	return (
		<Container {...rest}>
			<ButtonText>{title}</ButtonText>
		</Container>
	);
}
