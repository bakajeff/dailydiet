import { Button } from "@components/Button";

import { useNavigation } from "@react-navigation/native";

import { Container, Figure, Heading, Subtitle } from "./styles";

import OnDietIllustration from "../../assets/on-diet.png";

export function SuccessFeedback() {
	const navigation = useNavigation();

	function handleGoBack() {
		navigation.navigate("home");
	}

	return (
		<Container>
			<Heading>Continue assim!</Heading>
			<Subtitle>Você continua dentro da dieta. Muito bem!</Subtitle>

			<Figure source={OnDietIllustration} />

			<Button title="Ir para a página inicial" onPress={handleGoBack} />
		</Container>
	);
}
