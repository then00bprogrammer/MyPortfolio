import {
  Box,
  Button,
  Icon,
  Menu,
  MenuButton,
  MenuDivider,
  MenuList,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { IoHome, IoPersonSharp } from "react-icons/io5";
import { LuContact } from "react-icons/lu";
import { RiMenu3Fill } from "react-icons/ri";
import { ImCross } from "react-icons/im";
import { motion } from "framer-motion";
import PhoneMenuItem from "./PhoneMenuItem";


const PhoneMenu:React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    console.log("toggling",isOpen)
    setIsOpen(!isOpen);
  };

  const transition = {
    type: "spring",
    stiffness: 260,
    damping: 25,
  };

  const PhoneDivider = () => <MenuDivider bg='gold.400'/>

  return (
    <Box display={["flex", "flex", "none", "none"]}>
      <Menu onClose={toggleMenu} onOpen={toggleMenu}>
        <MenuButton
          bg="none"
          color={useColorModeValue("black", "gold.500")}
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
          <PhoneMenuItem text='Home' link='/' icon={IoHome}/>
          <PhoneDivider/>
          <PhoneMenuItem text='Services' link='#' icon={IoPersonSharp}/>
          <PhoneDivider/>
          <PhoneMenuItem text='Projects' link='/projects' icon={AiOutlineFundProjectionScreen}/>
          <PhoneDivider/>
          <PhoneMenuItem text='About' link='/about' icon={IoPersonSharp}/>
          <PhoneDivider/>
          <PhoneMenuItem text='Contact' link='/contact' icon={LuContact}/>
        </MenuList>
      </Menu>
    </Box>
  );
};

export default PhoneMenu;
