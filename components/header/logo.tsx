import { router } from "expo-router";
import React from "react";
import { Pressable, StyleSheet } from "react-native";
import { ThemedText } from "../themed-text";
import { ThemedView } from "../themed-view";
const Header = () => {
  return (
    <ThemedView style={[styles.heroSection, { userSelect: "none" }]}>
      <Pressable onPress={() => router.push("/employer/(tabs)")}>
        <ThemedText type="title" style={[styles.logo]}>
          Workdee
        </ThemedText>
      </Pressable>
    </ThemedView>
  );
};
export default Header;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    paddingTop: 60,
  },

  logo: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#007AFF",
  },

  heroSection: {
    backgroundColor: "inherit",
    padding: 2,
    alignItems: "center",
  },
});
