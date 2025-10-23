import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { IconSymbol } from "@/components/ui/icon-symbol";
import { router } from "expo-router";
import { StyleSheet, TouchableOpacity, View } from "react-native";

const index = () => (
  <ThemedView style={styles.container}>
    <View style={styles.content}>
      <ThemedText type="title" style={styles.title}>
        Welcome to Workdee
      </ThemedText>
      <ThemedText style={styles.tagline}>
        ไม่เลือกคน ไม่จบงาน / ไม่เลือกงานไม่ยากจน
      </ThemedText>

      <View style={styles.roleContainer}>
        <TouchableOpacity
          style={styles.roleCard}
          onPress={() => router.push("/employer")}
        >
          <View style={styles.iconContainer}>
            <IconSymbol name="briefcase.fill" size={48} color="#007AFF" />
          </View>
          <ThemedText type="subtitle" style={styles.roleTitle}>
            นายจ้าง (Owner)
          </ThemedText>
          <ThemedText style={styles.roleDescription}>
            ประกาศงาน จัดการโปรเจค
          </ThemedText>
          <ThemedText style={styles.roleDescription}>
            และจ้างฟรีแลนซ์
          </ThemedText>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.roleCard}
          onPress={() => router.push("/worker")}
        >
          <View style={styles.iconContainer}>
            <IconSymbol name="person.fill" size={48} color="#34C759" />
          </View>
          <ThemedText type="subtitle" style={styles.roleTitle}>
            ผู้กจ้าง (Worker)
          </ThemedText>
          <ThemedText style={styles.roleDescription}>
            หางาน รับงานฟรีแลนซ์
          </ThemedText>
          <ThemedText style={styles.roleDescription}>และสร้างรายได้</ThemedText>
        </TouchableOpacity>
      </View>
    </View>
  </ThemedView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    marginBottom: 12,
    textAlign: "center",
  },
  tagline: {
    fontSize: 16,
    textAlign: "center",
    opacity: 0.7,
    marginBottom: 48,
  },
  roleContainer: {
    flexDirection: "row",
    gap: 16,
    width: "100%",
    maxWidth: 600,
  },
  roleCard: {
    flex: 1,
    padding: 32,
    borderRadius: 16,
    backgroundColor: "rgba(0, 122, 255, 0.05)",
    alignItems: "center",
    gap: 12,
    borderWidth: 2,
    borderColor: "rgba(0, 122, 255, 0.2)",
  },
  iconContainer: {
    marginBottom: 8,
  },
  roleTitle: {
    fontSize: 20,
    textAlign: "center",
  },
  roleDescription: {
    fontSize: 14,
    textAlign: "center",
    opacity: 0.7,
  },
});

export default index;
