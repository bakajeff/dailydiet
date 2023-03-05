import { useNavigation } from "@react-navigation/native";
import { View } from "react-native";
import { useTheme } from "styled-components/native";
import {
	ButtonIcon,
	Container,
	Icon,
	ScreenHeaderStyleProps,
	Title,
} from "./styles";

type Props = {
	title: string;
	type?: ScreenHeaderStyleProps;
};

export function ScreenHeader({ title, type = "DEFAULT" }: Props) {
	const { COLORS } = useTheme();

	const navigation = useNavigation();

	const colors = {
		DEFAULT: COLORS.GRAY_200,
		PRIMARY: COLORS.GREEN_DARK,
		SECONDARY: COLORS.RED_DARK,
	};

	function handleGoBack() {
		navigation.goBack();
	}

	return (
		<Container type={type}>
			<ButtonIcon onPress={handleGoBack}>
				<Icon color={colors[type]} />
			</ButtonIcon>

			<Title>{title}</Title>

			<View style={{ width: 24, height: 24 }} />
		</Container>
	);
}
