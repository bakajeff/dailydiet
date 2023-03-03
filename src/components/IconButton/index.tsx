import {
	Container,
	ButtonText,
	EditIcon,
	ContainerStyleProps,
	DeleteIcon,
} from "./styles";

type Props = {
	title: string;
	variant: ContainerStyleProps;
};

export function IconButton({ title, variant = "SOLID" }: Props) {
	return (
		<Container variant={variant}>
			{variant === "SOLID" ? <EditIcon /> : <DeleteIcon />}

			<ButtonText variant={variant}>{title}</ButtonText>
		</Container>
	);
}
