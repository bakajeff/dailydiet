import { HomeHeader } from "@components/HomeHeader";
import { PercentCard } from "@components/PercentCard";
import { Container } from "./styles";

export function Home() {
	return (
		<Container>
			<HomeHeader />
			<PercentCard type="PRIMARY" percent="90,86" />
		</Container>
	);
}
