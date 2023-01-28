import { useState } from "react";
import { SectionList, View } from "react-native";
import { Header } from "../../components/Header";
import { Meal } from "../../components/Meal";
import { MealCard } from "../../components/MealCard";
import { NewMeal } from "../../components/NewMeal";
import { Container, SectionHeader } from "./styles";

type Meal = {
	name: string;
	description: string;
	date: string;
	hour: string;
	isOnDiet: boolean;
};

export function Home() {
	const [meals, setMeals] = useState([
		{
			date: "12.08.22",
			data: [
				{
					date: "12.08.22",
					hour: "20:00",
					name: "X-tudo",
					description: "Xis completo da lanchonete do bairro",
					isOnDiet: false,
				},
				{
					date: "12.08.22",
					hour: "16:00",
					name: "Whey protein com leite",
					description: "Xis completo da lanchonete do bairro",
					isOnDiet: true,
				},
				{
					date: "12.08.22",
					hour: "12:30",
					name: "Salada cesar com frango grelhado",
					description: "Xis completo da lanchonete do bairro",
					isOnDiet: true,
				},
				{
					date: "12.08.22",
					hour: "09:30",
					name: "Vitamina com banana com abacate",
					description: "Xis completo da lanchonete do bairro",
					isOnDiet: true,
				},
			],
		},
	]);

	return (
		<Container>
			<Header />
			<MealCard />
			<NewMeal />
			<SectionList
				sections={meals}
				keyExtractor={(item) => item.name}
				renderItem={({ item }) => (
					<Meal hour={item.hour} name={item.name} isOnDiet={item.isOnDiet} />
				)}
				renderSectionHeader={({ section: { date } }) => (
					<SectionHeader>{date}</SectionHeader>
				)}
			/>
		</Container>
	);
}