import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { ThemedButton } from "@/components/themeed-button";
import { router } from "expo-router";
import { StyleSheet } from "react-native";

const index = () => (
  <ThemedView style={styles.container}>
    <ThemedText type="title">Welcome to Workdee</ThemedText>
    <ThemedText type="subtitle">ไม่เลือกคน ไม่จบงาน</ThemedText>
    <ThemedText type="subtitle">/</ThemedText>
    <ThemedText type="subtitle">ไม่เลือกงานไม่ยากจน</ThemedText>
    <ThemedButton title="Get Started" onPress={() => router.push("/(tabs)")} />
  </ThemedView>
);

const styles = StyleSheet.create({
  container: {
    gap: 14,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default index;
