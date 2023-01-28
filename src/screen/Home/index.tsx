import { Header } from "../../components/Header";
import { Meal } from "../../components/Meal";
import { MealCard } from "../../components/MealCard";
import { NewMeal } from "../../components/NewMeal";
import { Container } from "./styles";

export function Home() {
	return (
		<Container>
			<Header />
			<MealCard />
			<NewMeal />
			<Meal />
		</Container>
	);
}
