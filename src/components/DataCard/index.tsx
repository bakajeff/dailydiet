import { Caption, Container, ContainerStyleProps, Data } from "./styles";

type Props = {
	data: number;
	caption: string;
	type?: ContainerStyleProps;
	fullWidth?: boolean;
};

export function DataCard({ data, caption, type, fullWidth }: Props) {
	return (
		<Container fullWidth={fullWidth} type={type}>
			<Data>{data}</Data>
			<Caption>{caption}</Caption>
		</Container>
	);
}
