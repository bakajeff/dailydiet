import { Button } from "@components/Button";
import { HomeHeader } from "@components/HomeHeader";
import { PercentCard } from "@components/PercentCard";
import { Container, MealHeader } from "./styles";

export function Home() {
	return (
		<Container>
			<HomeHeader />
			<PercentCard type="PRIMARY" percent="90,86" />

			<MealHeader>Refeições</MealHeader>
			<Button title="Nova refeição" />
		</Container>
	);
}
