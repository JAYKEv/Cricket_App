import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme";
import { LogBox } from "react-native";
LogBox.ignoreLogs([
  "Text strings must be rendered within a <Text> component",
]);
export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  if (!loaded) {
    return null; // Prevent app from rendering before fonts are loaded
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack
        screenOptions={{
          headerShown: false, 
        }}
      >
       
      <Stack.Screen name="CoachesScreen" />
      
         <Stack.Screen name="CalendarScreen" options={{ title: "Calendar" }} />
      <Stack.Screen name="StudentScreen" options={{ title: "Students" }} />
      <Stack.Screen name="AllVideoScreen" options={{ title: "Videos" }} />
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
