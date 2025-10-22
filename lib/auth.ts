import { expo } from "@better-auth/expo";
import { betterAuth } from "better-auth";
export const auth = betterAuth({
  plugins: [expo()],
  emailAndPassword: {
    trustedOrigins: ["workdee://"],
    enabled: true, // Enable authentication using email and password.
  },
});
