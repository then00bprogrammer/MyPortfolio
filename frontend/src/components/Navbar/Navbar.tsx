import React from "react";
import Link from "next/link";
import {
  Box,
  Flex,
  HStack,
  Icon,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { IoHome, IoPersonSharp } from "react-icons/io5";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { LuContact } from "react-icons/lu";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";

import PhoneMenu from "./PhoneMenu";
import NavItem from "./Navitem";
import CustomLottiePlayer from "@/utils/CustomLottiePlayer";
import { useTheme } from "@/ThemeContext";

const Navbar: React.FC = () => {
  const { toggleColorMode } = useColorMode();
  const { isThemeOn, navbarColor, toggleTheme } = useTheme();

  return (
    <Flex
      position="fixed"
      zIndex={100}
      top={0}
      w="full"
      h={["10svh", "15svh"]}
      justifyContent="space-between"
      alignItems="center"
      padding="5svh 7.5vw"
      bg={useColorModeValue("white", "black")}
      color={useColorModeValue("black", navbarColor)}
    >
      <Link href="/">
        {isThemeOn ? (
          <Box h="10vh" w="10vh">
            <CustomLottiePlayer src="santa" />
          </Box>
        ) : (
          <Text fontSize="4xl" fontWeight="extrabold">Nr.</Text>
        )}
      </Link>
      <HStack
        as="nav"
        fontSize="lg"
        width="50%"
        justifyContent="flex-end"
        spacing={["2", "10"]}
      >
        <HStack spacing={10} display={["none", "none", "block", "flex"]}>
          <NavItem text="Home" link="/" icon={IoHome} />
          <NavItem
            text="Projects"
            link="/projects"
            icon={AiOutlineFundProjectionScreen}
          />
          <NavItem text="About" link="/about" icon={IoPersonSharp} />
          <NavItem text="Contact" link="/contact" icon={LuContact} />
        </HStack>
        <Icon
          cursor="pointer"
          boxSize="9"
          as={useColorModeValue(BsFillMoonFill, BsFillSunFill)}
          onClick={()=>{
            toggleColorMode();
            if(isThemeOn)toggleTheme();
          }}
        ></Icon>
        <PhoneMenu />
      </HStack>
    </Flex>
  );
};

export default Navbar;
