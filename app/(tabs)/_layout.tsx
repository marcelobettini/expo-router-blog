import { Tabs } from "expo-router";
export default () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarInactiveTintColor: "darkslategrey",
        tabBarInactiveBackgroundColor: "whitesmoke",
        tabBarActiveBackgroundColor: "lightgray",
        tabBarActiveTintColor: "cornflowerblue",
        tabBarLabelStyle: { paddingBottom: 5, fontSize: 14 },
      }}
    >
      <Tabs.Screen name="authors" options={{ title: "All authors" }} />
      <Tabs.Screen name="home" options={{ title: "All articles" }} />
    </Tabs>
  );
};
