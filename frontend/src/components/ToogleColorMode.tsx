import React from "react";
import { Box, Icon, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { GiMoonBats, GiSunPriest } from "react-icons/gi";

type Props = {};

const ToogleColorMode = (props: Props) => {
  const { toggleColorMode } = useColorMode();
  return (
    <Box position='fixed' right='5vw' bottom='7.5vh' zIndex='2' cursor='pointer'>
      <Icon
        color={useColorModeValue('black','#C69749')}
        boxSize='16'
        as={useColorModeValue(GiMoonBats, GiSunPriest)}
        onClick={toggleColorMode}
      ></Icon>
    </Box>
  );
};

export default ToogleColorMode;
