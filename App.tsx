import { ThemeProvider } from "styled-components/native";
import { Home } from "./src/screen/Home";

import theme from "./src/theme";

export default function App() {
	return (
		<ThemeProvider theme={theme}>
			<Home />
		</ThemeProvider>
	);
}
