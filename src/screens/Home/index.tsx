import { Button } from "@components/Button";
import { HomeHeader } from "@components/HomeHeader";
import { Meal } from "@components/Meal";
import { PercentCard } from "@components/PercentCard";

import { Container, MealHeader } from "./styles";

export function Home() {
	return (
		<Container>
			<HomeHeader />
			<PercentCard type="PRIMARY" percent="90,86" />

			<MealHeader>Refeições</MealHeader>
			<Button title="Nova refeição" />

			<Meal time="20:00" name="X-tudo" isOnDiet />
		</Container>
	);
}
