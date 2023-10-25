import { HStack, Icon, MenuItem, Text, useColorModeValue } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { IconType } from "react-icons";

type Props = {
  text: string;
  link: string;
  icon: IconType;
}

const PhoneMenuItem:React.FC<Props> = ({ text, link, icon }) => {
  return (
    <MenuItem minH="30px" bg={useColorModeValue("gray.200", "#0F0E0E")}>
      <Link href={link}>
        <HStack spacing={5}>
          <Icon as={icon}></Icon>
          <Text letterSpacing="widest">{text}</Text>
        </HStack>
      </Link>
    </MenuItem>
  );
};

export default PhoneMenuItem;
