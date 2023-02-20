import { TextInputProps } from "react-native";
import { Container, Field, Label } from "./styles";

type Props = TextInputProps & {
	label: string;
};

export function Input({ label, ...rest }: Props) {
	return (
		<Container>
			<Label>{label}</Label>
			<Field {...rest} />
		</Container>
	);
}
