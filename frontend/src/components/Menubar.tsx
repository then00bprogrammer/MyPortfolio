import {
  Box,
  Button,
  HStack,
  Icon,
  Image,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { IoHome, IoPersonSharp } from "react-icons/io5";
import { LuContact } from "react-icons/lu";
import { RiMenu3Fill } from "react-icons/ri";
import { ImCross } from "react-icons/im";
import { RxCross2 } from "react-icons/rx";
import { motion } from "framer-motion";


const PhoneMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    console.log("toggling",isOpen)
    setIsOpen(!isOpen);
  };

  const transition = {
    type: "spring",
    stiffness: 260,
    damping: 25,
  };

  const handleOutsideClick = ()=>{
    if(isOpen) {
      console.log('clicked', isOpen)
      setIsOpen(false);
    }
  }
  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <Box display={["flex", "flex", "none", "none"]}>
      <Menu onClose={toggleMenu} onOpen={toggleMenu}>
        <MenuButton
          bg="none"
          color={useColorModeValue("black", "gold.600")}
          _hover={{ bg: "none" }}
          _selected={{ bg: "none" }}
          _active={{ bg: "none" }}
          as={Button}
          boxSize="2rem"
        >
          <motion.div
            initial={false}
            animate={{ rotate: isOpen ? 360 : 0 }}
            transition={transition}
          >
            <Icon
              as={isOpen ? ImCross : RiMenu3Fill}
              boxSize="9"
              color="currentColor"
            />
          </motion.div>
        </MenuButton>
        <MenuList bg={useColorModeValue("gray.200", "#0F0E0E")}>
          <MenuItem minH='30px' bg={useColorModeValue("gray.200", "#0F0E0E")}>
            <Link href="/">
              <HStack spacing={5}>
                <Icon as={IoHome}></Icon>
                <Text letterSpacing="widest">Home</Text>
              </HStack>
            </Link>
          </MenuItem>
          <MenuDivider bg='gold.400'/>
          <MenuItem minH='30px' bg={useColorModeValue("gray.200", "#0F0E0E")}>
            <Link href="#">
              <HStack spacing={5}>
                <Icon as={IoPersonSharp}></Icon>
                <Text letterSpacing="widest">Services</Text>
              </HStack>
            </Link>
          </MenuItem>
          <MenuDivider bg='gold.400'/>
          <MenuItem
            minH='30px'
            bg={useColorModeValue("gray.200", "#0F0E0E")}
          >
            <Link href="/projects">
              <HStack spacing={5}>
                <Icon as={AiOutlineFundProjectionScreen}></Icon>
                <Text letterSpacing="widest">Projects</Text>
              </HStack>
            </Link>
          </MenuItem>
          <MenuDivider bg='gold.400'/>
          <MenuItem minH='30px' bg={useColorModeValue("gray.200", "#0F0E0E")}>
            <Link href="/contact">
              <HStack spacing={5}>
                <Icon as={LuContact}></Icon>
                <Text letterSpacing="widest">Contact</Text>
              </HStack>
            </Link>
          </MenuItem>
        </MenuList>
      </Menu>
    </Box>
  );
};

export default PhoneMenu;
