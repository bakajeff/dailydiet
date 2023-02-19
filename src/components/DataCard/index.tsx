import { Caption, Container, ContainerStyleProps, Data } from "./styles";

type Props = {
	data: number;
	caption: string;
	type?: ContainerStyleProps;
};

export function DataCard({ data, caption, type }: Props) {
	return (
		<Container type={type}>
			<Data>{data}</Data>
			<Caption>{caption}</Caption>
		</Container>
	);
}
