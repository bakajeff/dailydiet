import { ActivityIndicator, Text } from "react-native";
import { ThemeProvider } from "styled-components/native";
import {
	useFonts,
	NunitoSans_400Regular,
	NunitoSans_700Bold,
} from "@expo-google-fonts/nunito-sans";

import theme from "./src/theme";

import { Routes } from "@routes/index";

export default function App() {
	const [fontsLoaded] = useFonts({
		NunitoSans_400Regular,
		NunitoSans_700Bold,
	});

	return (
		<ThemeProvider theme={theme}>
			{fontsLoaded ? (
				<Routes />
			) : (
				<ActivityIndicator
					style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
				/>
			)}
		</ThemeProvider>
	);
}
