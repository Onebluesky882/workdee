import { Button } from "react-native";
import { ThemedView } from "../../components/themed-view";

export default function SocialSignIn() {
  return (
    <ThemedView
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <Button title="Login with LINE" onPress={() => console.log("click")} />
    </ThemedView>
  );
}
