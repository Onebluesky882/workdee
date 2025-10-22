import { StyleSheet } from "react-native";
import { ThemedText } from "../themed-text";
import { ThemedView } from "../themed-view";
const Header = () => {
  return (
    <ThemedView style={styles.heroSection}>
      <ThemedText type="title" style={styles.logo}>
        Workdee
      </ThemedText>
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
    padding: 2,
    alignItems: "center",
  },
});
