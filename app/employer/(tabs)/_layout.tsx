import Header from "@/components/header/logo";
import { Tabs } from "expo-router";
const _layout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        title: "Employer",
        headerLeft: () => <Header />,
      }}
    >
      <Tabs.Screen name="index" options={{ headerShown: false }} />
      <Tabs.Screen name="(tabs)/board" options={{ headerShown: false }} />
    </Tabs>
  );
};
export default _layout;
