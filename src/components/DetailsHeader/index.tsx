import { useNavigation } from "@react-navigation/native";

import {
	ButtonIcon,
	Caption,
	Container,
	DetailsHeaderStyleProps,
	Icon,
	Percent,
} from "./styles";

type Props = {
	type: DetailsHeaderStyleProps;
};

export function DetailsHeader({ type = "PRIMARY" }: Props) {
	const navigation = useNavigation();

	function handleGoBack() {
		navigation.goBack();
	}

	return (
		<Container type={type}>
			<ButtonIcon onPress={handleGoBack}>
				<Icon color={type} />
			</ButtonIcon>

			<Percent>90,86%</Percent>

			<Caption>das refeições dentro da dieta</Caption>
		</Container>
	);
}
