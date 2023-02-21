import { PressableProps } from "react-native";
import { Container, Indicator, IndicatorStyleProps, Title } from "./styled";

type Props = PressableProps & {
	title: string;
	type?: IndicatorStyleProps;
	active?: boolean;
};

export function OptionButton({
	title,
	type = "SECONDARY",
	active = false,
	...rest
}: Props) {
	return (
		<Container type={type} active={active} {...rest}>
			<Indicator type={type} />

			<Title>{title}</Title>
		</Container>
	);
}
