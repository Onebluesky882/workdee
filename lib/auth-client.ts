import { expoClient } from "@better-auth/expo/client";
import { createAuthClient } from "better-auth/react";
import * as SecureStore from "expo-secure-store";

export const authClient = createAuthClient({
  baseURL: "http://localhost:8081", // Base URL of your Better Auth backend.
  plugins: [
    expoClient({
      scheme: "workdee",
      storagePrefix: "workdee",
      storage: SecureStore,
    }),
  ],
});

export const getAuthHeaders = async (): Promise<Record<string, string>> => {
  const cookies = await authClient.getCookie();
  if (!cookies) return {};
  return { Cookie: cookies };
};

// 3️⃣ ฟังก์ชันช่วย fetch request authenticated
export const fetchAuthenticated = async <T = any>(
  url: string,
  options: RequestInit = {}
): Promise<T> => {
  // รวม headers จาก cookie + headers จาก options
  const headers = {
    ...(await getAuthHeaders()),
    ...((options.headers as Record<string, string>) || {}),
  };

  // ส่ง request
  const response = await fetch(url, { ...options, headers });

  // เช็ค error ของ response
  if (!response.ok) {
    const text = await response.text();
    throw new Error(`Request failed: ${response.status} ${text}`);
  }

  // parse JSON
  return response.json() as Promise<T>;
};
