import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { HStack, Icon, Text, useColorModeValue } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { useTheme } from "@/ThemeContext";

type Props = {
  text: string;
  link: string;
  icon: IconType;
};

const NavItem: React.FC<Props> = ({ text, link, icon }) => {
  const { isThemeOn, navbarUnderlineColor } = useTheme();
  const linkColor = useColorModeValue("black", isThemeOn ? '#f87171' : '#C69749');
  return (
    <Link href={link}>
      <motion.div whileHover={{ borderBottom: `2px solid ${linkColor}` }}>
        <HStack>
          <Icon as={icon} />
          <Text letterSpacing="widest">{text}</Text>
        </HStack>
      </motion.div>
    </Link>
  );
};

export default NavItem;
