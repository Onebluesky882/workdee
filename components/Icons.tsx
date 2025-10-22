import {
  Feather,
  FontAwesome,
  Ionicons,
  MaterialIcons,
} from "@expo/vector-icons";
import React from "react";
import { Text } from "react-native";

type IconLibrary = "FontAwesome" | "Feather" | "MaterialIcons" | "Ionicons";

type IconProps = {
  library: IconLibrary;
  name: string;
  size?: number;
  color?: string;
};

export const Icon: React.FC<IconProps> = ({
  library,
  name,
  size = 24,
  color = "black",
}) => {
  let IconComponent;

  switch (library) {
    case "FontAwesome":
      IconComponent = FontAwesome;
      break;
    case "Ionicons":
      IconComponent = Ionicons;
      break;
    case "Feather":
      IconComponent = Feather;
      break;
    case "MaterialIcons":
      IconComponent = MaterialIcons;
      break;
    default:
      return <Text>Icon not found</Text>;
  }

  return <IconComponent name={name as any} size={size} color={color} />;
};
