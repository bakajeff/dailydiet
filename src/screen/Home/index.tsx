import { Header } from "../../components/Header";
import { MealCard } from "../../components/MealCard";
import { NewMeal } from "../../components/NewMeal";
import { Container } from "./styles";

export function Home() {
	return (
		<Container>
			<Header />
			<MealCard />
			<NewMeal />
		</Container>
	);
}
