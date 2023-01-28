import { Header } from "../../components/Header";
import { MealCard } from "../../components/MealCard";
import { Container } from "./styles";

export function Home() {
	return (
		<Container>
			<Header />
			<MealCard />
		</Container>
	);
}
