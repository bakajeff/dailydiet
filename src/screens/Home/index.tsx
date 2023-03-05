import { useState } from "react";
import { SectionList } from "react-native";

import { useNavigation } from "@react-navigation/native";

import { Button } from "@components/Button";
import { HomeHeader } from "@components/HomeHeader";
import { Meal } from "@components/Meal";
import { PercentCard } from "@components/PercentCard";

import { Container, MealHeader, SectionHeader } from "./styles";

export function Home() {
	const [meals, setMeals] = useState([
		{
			title: "12.08.22",
			data: [
				{
					time: "20:00",
					name: "X-tudo",
					isOnDiet: false,
				},
				{
					time: "16:00",
					name: "Whey protein com leite",
					isOnDiet: true,
				},
				{
					time: "12:30",
					name: "Salada cesar com frango grelhado",
					isOnDiet: true,
				},
				{
					time: "09:30",
					name: "Vitamina de banana com abacate",
					isOnDiet: true,
				},
			],
		},
	]);

	const navigation = useNavigation();

	function handleStatistics() {
		navigation.navigate("statistics");
	}

	return (
		<Container>
			<HomeHeader />
			<PercentCard type="PRIMARY" percent="90,86" onPress={handleStatistics} />

			<MealHeader>Refeições</MealHeader>
			<Button title="Nova refeição" />

			<SectionList
				sections={meals}
				keyExtractor={(item) => item.name}
				renderItem={({ item }) => (
					<Meal name={item.name} time={item.time} isOnDiet={item.isOnDiet} />
				)}
				renderSectionHeader={({ section: { title } }) => (
					<SectionHeader>{title}</SectionHeader>
				)}
				contentContainerStyle={{
					paddingBottom: 100,
				}}
			/>
		</Container>
	);
}
