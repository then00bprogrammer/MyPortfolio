import React from "react";
import { Divider, HStack, Icon } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter } from "react-icons/fa6";
import { SiLeetcode, SiCodeforces } from "react-icons/si";

const Social: React.FC = () => {
  return (
    <HStack
      h="5vh"
      w="70%"
      justifyContent="center"
      alignItems="center"
      marginTop="25vh"
      marginBottom="25vh"
    >
      <Divider bg="black" orientation="horizontal" height="1px"></Divider>
      <HStack color="gray.800" marginLeft="30px" marginRight="30px" spacing={5}>
        <a href="https://github.com/then00bprogrammer" target="_blank"><Icon as={FaGithub} cursor="pointer" boxSize="10"></Icon></a>
        <a href="https://www.linkedin.com/in/nikhil-ranjan-tnp/" target="_blank"><Icon as={FaLinkedin} cursor="pointer" boxSize="10"></Icon></a>
        <a href="https://leetcode.com/then00bprogrammer/" target="_blank"><Icon as={SiLeetcode} cursor="pointer" boxSize="10"></Icon></a>
        <a href="https://codeforces.com/profile/then00bprogrammer" target="_blank"><Icon as={SiCodeforces} cursor="pointer" boxSize="10"></Icon></a>
        <a href="https://twitter.com/NikhilRanjan02" target="_blank"><Icon as={FaTwitter} cursor="pointer" boxSize="10"></Icon></a>
        <a href=""><Icon as={FaEnvelope} cursor="pointer" boxSize="10"></Icon></a>
      </HStack>
      <Divider bg="black" orientation="horizontal" height="1px"></Divider>
    </HStack>
  );
};

export default Social;
