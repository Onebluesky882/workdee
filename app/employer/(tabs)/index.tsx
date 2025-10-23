import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { IconSymbol } from "@/components/ui/icon-symbol";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function HomeScreen() {
  const router = useRouter();
  const colorScheme = useColorScheme();
  const [selectedProvince, setSelectedProvince] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const provinces = [
    "กรุงเทพมหานคร",
    "เชียงใหม่",
    "ภูเก็ต",
    "ขอนแก่น",
    "นครราชสีมา",
  ];
  const categories = [
    "Web",
    "Mobile",
    "Design",
    "Marketing",
    "Content",
    "Data",
  ];

  return (
    <ScrollView style={styles.container}>
      <ThemedView style={styles.heroSection}>
        <ThemedText style={styles.heroSubtitle}>
          งานฟรีแลนซ์ที่น่าเชื่อถือ พร้อมระบบรีวิวและการันตี
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.searchSection}>
        <ThemedText type="subtitle" style={styles.sectionTitle}>
          ค้นหางานด่วน
        </ThemedText>

        <View style={styles.filterContainer}>
          <View style={styles.filterGroup}>
            <ThemedText style={styles.filterLabel}>จังหวัด</ThemedText>
            <View style={styles.pickerContainer}>
              <TextInput
                style={[
                  styles.picker,
                  { color: colorScheme === "dark" ? "#fff" : "#000" },
                ]}
                placeholder="เลือกจังหวัด"
                placeholderTextColor={colorScheme === "dark" ? "#888" : "#999"}
                value={selectedProvince}
                onChangeText={setSelectedProvince}
              />
            </View>
          </View>

          <View style={styles.filterGroup}>
            <ThemedText style={styles.filterLabel}>ประเภทงาน</ThemedText>
            <View style={styles.pickerContainer}>
              <TextInput
                style={[
                  styles.picker,
                  { color: colorScheme === "dark" ? "#fff" : "#000" },
                ]}
                placeholder="เลือกประเภทงาน"
                placeholderTextColor={colorScheme === "dark" ? "#888" : "#999"}
                value={selectedCategory}
                onChangeText={setSelectedCategory}
              />
            </View>
          </View>

          <TouchableOpacity
            style={styles.searchButton}
            onPress={() => router.push("/")}
          >
            <IconSymbol name="magnifyingglass" size={20} color="#fff" />
            <Text style={styles.searchButtonText}>ค้นหางาน</Text>
          </TouchableOpacity>
        </View>
      </ThemedView>

      <ThemedView style={styles.ctaSection}>
        <TouchableOpacity
          style={styles.ctaCard}
          onPress={() => router.push("/")}
        >
          <IconSymbol name="clock.fill" size={32} color="#007AFF" />
          <ThemedText type="subtitle" style={styles.ctaTitle}>
            งานล่าสุด
          </ThemedText>
          <ThemedText style={styles.ctaDescription}>
            ดูงานที่เพิ่งประกาศใหม่
          </ThemedText>
        </TouchableOpacity>
      </ThemedView>

      <ThemedView style={styles.featuresSection}>
        <ThemedText type="subtitle" style={styles.sectionTitle}>
          ทำไมต้อง Workdee?
        </ThemedText>

        <View style={styles.featureItem}>
          <IconSymbol name="checkmark.seal.fill" size={24} color="#34C759" />
          <View style={styles.featureContent}>
            <ThemedText type="defaultSemiBold">งานที่ยืนยันแล้ว</ThemedText>
            <ThemedText style={styles.featureDescription}>
              ระบบตรวจสอบงานและการจ่ายเงินจริง
            </ThemedText>
          </View>
        </View>

        <View style={styles.featureItem}>
          <IconSymbol name="star.fill" size={24} color="#FF9500" />
          <View style={styles.featureContent}>
            <ThemedText type="defaultSemiBold">ระบบรีวิว</ThemedText>
            <ThemedText style={styles.featureDescription}>
              ดูรีวิวจากผู้ใช้งานจริง
            </ThemedText>
          </View>
        </View>

        <View style={styles.featureItem}>
          <IconSymbol name="shield.fill" size={24} color="#007AFF" />
          <View style={styles.featureContent}>
            <ThemedText type="defaultSemiBold">ปลอดภัย</ThemedText>
            <ThemedText style={styles.featureDescription}>
              การันตีความปลอดภัยในการทำงาน
            </ThemedText>
          </View>
        </View>
      </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  flexRowDiv: {
    flexDirection: "row",
    gap: 8,
  },
  boardButton: {
    backgroundColor: "#007AFF",
  },
  container: {
    flex: 1,
  },
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
  headerButtons: {
    flexDirection: "row",
    gap: 8,
  },
  authButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#007AFF",
  },
  signupButton: {
    backgroundColor: "#007AFF",
  },
  authButtonText: {
    color: "#007AFF",
    fontSize: 14,
    fontWeight: "600",
  },
  signupButtonText: {
    color: "#fff",
  },
  heroSection: {
    padding: 2,
    alignItems: "center",
  },
  heroTitle: {
    padding: 16,
    fontSize: 32,
    textAlign: "center",
    marginBottom: 12,
  },
  heroSubtitle: {
    fontSize: 16,
    textAlign: "center",
    opacity: 0.7,
  },
  searchSection: {
    padding: 16,
    marginHorizontal: 16,
    marginBottom: 24,
    borderRadius: 16,
    backgroundColor: "rgba(0, 122, 255, 0.1)",
  },
  sectionTitle: {
    marginBottom: 16,
  },
  filterContainer: {
    gap: 12,
  },
  filterGroup: {
    gap: 8,
  },
  filterLabel: {
    fontSize: 14,
    fontWeight: "600",
  },
  pickerContainer: {
    borderRadius: 8,
    overflow: "hidden",
  },
  picker: {
    padding: 12,
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    borderRadius: 8,
    fontSize: 16,
  },
  searchButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#007AFF",
    padding: 16,
    borderRadius: 8,
    gap: 8,
    marginTop: 8,
  },
  searchButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  ctaSection: {
    flexDirection: "row",
    padding: 16,
    gap: 12,
  },
  ctaCard: {
    flex: 1,
    padding: 20,
    borderRadius: 12,
    alignItems: "center",
    backgroundColor: "rgba(0, 122, 255, 0.05)",
    gap: 8,
  },
  ctaTitle: {
    fontSize: 16,
  },
  ctaDescription: {
    fontSize: 12,
    textAlign: "center",
    opacity: 0.7,
  },
  featuresSection: {
    padding: 16,
    marginBottom: 32,
  },
  featureItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginTop: 16,
    padding: 16,
    borderRadius: 12,
    backgroundColor: "rgba(0, 122, 255, 0.05)",
  },
  featureContent: {
    flex: 1,
    gap: 4,
  },
  featureDescription: {
    fontSize: 12,
    opacity: 0.7,
  },
});
