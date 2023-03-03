import { Container, ButtonText, EditIcon } from "./styles";

type Props = {
	title: string;
};

export function IconButton({ title }: Props) {
	return (
		<Container>
			<EditIcon />
			<ButtonText>{title}</ButtonText>
		</Container>
	);
}
