import type { ComponentStyleConfig } from "@chakra-ui/theme";

export const Button: ComponentStyleConfig = {
  baseStyle: {
    fontSize: "10pt",
    fontWeight: 500,
    _focus: {
      boxShadow: "none",
    },
  },
  sizes: {
    sm: {
      fontSize: "8pt",
    },
    md: {
      fontSize: "10pt",
    },
    lg: {
      fontSize: "12pt",
    },
    xl:{
      fontsize: "15pt"
    }
  },
  variants: {
    solid: {
      
    }
  },
};
