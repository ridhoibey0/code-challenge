import { extendTheme } from "@chakra-ui/react";
import { colors } from "./foundations";

const overrides = {
  colors,
  fonts: {
    body: "Manrope, sans-serif",
    heading: "Manrope, sans-serif",
  },
};

export default extendTheme(overrides);
