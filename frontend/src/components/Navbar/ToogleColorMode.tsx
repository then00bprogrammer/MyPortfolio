import React from "react";
import { Box, Icon, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { GiMoonBats, GiSunPriest } from "react-icons/gi";

const ToogleColorMode:React.FC = () => {
  const { toggleColorMode } = useColorMode();
  return (
    <Box
      position="fixed"
      right="5vw"
      bottom="7.5svh"
      zIndex="2"
      cursor="pointer"
    >
      <Icon
        color={useColorModeValue("black", "gold.500")}
        boxSize="16"
        as={useColorModeValue(GiMoonBats, GiSunPriest)}
        onClick={toggleColorMode}
      ></Icon>
    </Box>
  );
};

export default ToogleColorMode;
