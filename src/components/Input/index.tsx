import { TextInputProps } from "react-native";
import { Field, Label } from "./styles";

type Props = TextInputProps & {
	label: string;
};

export function Input({ label, ...rest }: Props) {
	return (
		<>
			<Label>{label}</Label>
			<Field underlineColorAndroid="transparent" {...rest} />
		</>
	);
}
