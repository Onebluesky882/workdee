import { Tabs } from "expo-router";
import React from "react";

import { HapticTab } from "@/components/haptic-tab";
import Header from "@/components/header/logo";
import MenuLeft from "@/components/header/menuLeft";
import { IconSymbol } from "@/components/ui/icon-symbol";
import { Colors } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: true,
        tabBarButton: HapticTab,
        headerLeft: () => <Header />,
        headerRight: () => <MenuLeft />,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerTitle: "",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="house.fill" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="jobs"
        options={{
          title: "งานทั้งหมด",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="briefcase.fill" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
