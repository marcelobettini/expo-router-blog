import { Stack, Tabs } from "expo-router";
import { Text } from "react-native";
import Footer from "../components/Footer";
const BaseLayout = () => {
  return (
    <>
      <Stack
        screenOptions={{
          title: "Blogger",
          headerShown: true,
          headerShadowVisible: false,
          headerBackTitleVisible: false,
          animation: "slide_from_right",
        }}
      >
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="index" />
      </Stack>

      <Footer />
    </>
  );
};

export default BaseLayout;
