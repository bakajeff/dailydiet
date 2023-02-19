import { Caption, Container, Data } from "./styles";

type Props = {
	data: number;
	caption: string;
};

export function DataCard({ data, caption }: Props) {
	return (
		<Container>
			<Data>{data}</Data>
			<Caption>{caption}</Caption>
		</Container>
	);
}
