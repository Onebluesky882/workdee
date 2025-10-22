import { useThemeColor } from "@/hooks/use-theme-color";
import React from "react";
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  type TouchableOpacityProps,
} from "react-native";

export type ThemedButtonProps = TouchableOpacityProps & {
  lightColor?: string;
  darkColor?: string;
  type?: "primary" | "outline" | "ghost";
  title: string;
  loading?: boolean;
};

export function ThemedButton({
  title,
  style,
  lightColor,
  darkColor,
  type = "primary",
  loading = false,
  disabled,
  ...rest
}: ThemedButtonProps) {
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    type === "primary" ? "tint" : "background"
  );
  const textColor =
    type === "primary"
      ? "#fff"
      : useThemeColor({ light: "#007AFF", dark: "#0A84FF" }, "text");

  return (
    <TouchableOpacity
      style={[
        styles.base,
        type === "primary" && { backgroundColor },
        type === "outline" && [
          styles.outline,
          { borderColor: backgroundColor },
        ],
        type === "ghost" && styles.ghost,
        disabled && styles.disabled,
        style,
      ]}
      disabled={disabled || loading}
      activeOpacity={0.8}
      {...rest}
    >
      {loading ? (
        <ActivityIndicator color={textColor} />
      ) : (
        <Text
          style={[
            styles.text,
            { color: textColor },
            type === "outline" && { color: backgroundColor },
          ]}
        >
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  base: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  outline: {
    borderWidth: 1.5,
    backgroundColor: "transparent",
  },
  ghost: {
    backgroundColor: "transparent",
  },
  text: {
    fontSize: 16,
    fontWeight: "600",
  },
  disabled: {
    opacity: 0.6,
  },
});
