import { expoClient } from "@better-auth/expo/client";
import { createAuthClient } from "better-auth/react";
import SecureStorage from "expo-secure-store";

export const authClient = createAuthClient({
  baseURL: "http://localhost:8081", // Base URL of your Better Auth backend.
  plugins: [
    expoClient({
      scheme: "workdee",
      storagePrefix: "workdee",
      storage: SecureStorage,
    }),
  ],
});
