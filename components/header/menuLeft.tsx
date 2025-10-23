import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Icon } from "../Icons";
import { ThemedView } from "../themed-view";

import { authClient } from "@/lib/auth-client";

const MenuLeft = () => {
  const { data: session } = authClient.useSession();
  return (
    <ThemedView style={styles.container}>
      {session && <> Welcome, {session?.user.name}</>}
      <TouchableOpacity>
        <Icon
          library="FontAwesome"
          name="user-circle-o"
          size={24}
          color="black"
        />
      </TouchableOpacity>
      <Icon
        library="Ionicons"
        name="notifications-circle"
        size={24}
        color="black"
      />
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 8,
  },
});
export default MenuLeft;
