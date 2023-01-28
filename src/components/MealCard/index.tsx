import { useState } from "react";
import { Caption, Container, DietBasedColor, Icon, Percent } from "./styles";

type Props = {
	percent: number;
	color: DietBasedColor;
};

export function MealCard({ percent, color = "PRIMARY" }: Props) {
	function sanitizePercentage(percent: number) {
		return String(percent).replace(".", ",");
	}

	return (
		<Container color={color}>
			<Icon color={color} />
			<Percent>{sanitizePercentage(percent)}%</Percent>

			<Caption>das refeições dentro da dieta</Caption>
		</Container>
	);
}
