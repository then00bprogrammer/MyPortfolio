import React from "react";
import {
  Flex,
  HStack,
  Icon,
  Text,
  VStack,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { IoHome, IoPersonSharp } from "react-icons/io5";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { LuContact } from "react-icons/lu";
import Link from "next/link";
import { motion } from "framer-motion";
import { GiMoonBats, GiSunPriest } from "react-icons/gi";
import PhoneMenu from "./Phone Menu";

const Navbar = () => {
  const linkColor = useColorModeValue("black", "#C69749");
  const { toggleColorMode } = useColorMode();
  return (
    <Flex
      position='fixed'
      zIndex={100}
      top={0}
      w="full"
      h="15vh"
      justifyContent="space-between"
      alignItems="center"
      padding="5vh 5vw"
      bg={useColorModeValue("white", "black")}
      color={useColorModeValue("black", "#C69749")}
    >
      <Link href="/">
        <Text fontSize="4xl" fontWeight="extrabold">
          Nr.
        </Text>
      </Link>
      <HStack
        as="nav"
        fontSize="lg"
        width="50%"
        justifyContent="flex-end"
        spacing={10}
      >
        <HStack spacing={10} display={['none','none','block','flex']}>
        <Link href="/">
          <motion.div whileHover={{ borderBottom: `2px solid ${linkColor}` }}>
            <HStack>
              <Icon as={IoHome}></Icon>
              <Text letterSpacing="widest">Home</Text>
            </HStack>
          </motion.div>
        </Link>
        <Link href="#">
          <motion.div whileHover={{ borderBottom: `2px solid ${linkColor}` }}>
            <HStack>
              <Icon as={IoPersonSharp}></Icon>
              <Text letterSpacing="widest">Services</Text>
            </HStack>
          </motion.div>
        </Link>
        <Link href="/projects">
          <motion.div whileHover={{ borderBottom: `2px solid ${linkColor}` }}>
            <HStack>
              <Icon as={AiOutlineFundProjectionScreen}></Icon>
              <Text letterSpacing="widest">Projects</Text>
            </HStack>
          </motion.div>
        </Link>
        <Link href="/contact">
          <motion.div whileHover={{ borderBottom: `2px solid ${linkColor}` }}>
            <HStack>
              <Icon as={LuContact}></Icon>
              <Text letterSpacing="widest">Contact</Text>
            </HStack>
          </motion.div>
        </Link>
        </HStack>
        <Icon
        color={useColorModeValue('black','gold.500')}
        boxSize='9'
        as={useColorModeValue(GiMoonBats, GiSunPriest)}
        onClick={toggleColorMode}
      ></Icon>
      <PhoneMenu/>
      </HStack>
    </Flex>
  );
};

export default Navbar;
