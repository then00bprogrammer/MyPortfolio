import { Button, useColorModeValue } from "@chakra-ui/react";
import React, { ReactNode, MouseEvent } from "react";

type OutlineButtonProps = {
  children: ReactNode;
  light?: string;
  dark?: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

const OutlineButton = ({ children, light = "black", dark = "gold", onClick }: OutlineButtonProps) => {
  return (
    <Button
      variant="outline"
      colorScheme={useColorModeValue(light, dark)}
      borderRadius={0}
      size="lg"
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

export default OutlineButton;
