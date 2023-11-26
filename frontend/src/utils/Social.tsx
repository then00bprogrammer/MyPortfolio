import React from "react";
import { Divider, HStack, Icon, useColorModeValue } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter } from "react-icons/fa6";
import { SiLeetcode, SiCodeforces } from "react-icons/si";
import { motion } from "framer-motion";

const SocialButton: React.FC<{
  href: string;
  icon: any;
  label: string;
}> = ({ href, icon }) => (
  <motion.button
    whileHover={{
      scale: 1.2,
      rotate: 360,
      transition: { duration: 0.6 },
    }}
    onHoverStart={() => {
      rotate: 90;
    }}
  >
    <a href={href} target="_blank">
      <Icon as={icon} cursor="pointer" boxSize={["6", "10"]} />
    </a>
  </motion.button>
);

const Social: React.FC = () => {
  return (
    <HStack
      h="5svh"
      w={["100%", "70%"]}
      marginRight="auto"
      justifyContent="center"
      alignItems="center"
      marginTop="5svh"
      marginBottom={["5svh", "10svh"]}
    >
      <Divider
        bg={useColorModeValue("black", "gold.600")}
        orientation="horizontal"
        height="1px"
      />
      <HStack
        color={useColorModeValue("gray.800", "gold.600")}
        marginLeft="30px"
        marginRight="30px"
        spacing={5}
      >
        <SocialButton
          href="https://github.com/then00bprogrammer"
          icon={FaGithub}
          label="GitHub"
        />
        <SocialButton
          href="https://www.linkedin.com/in/nikhil-ranjan-tnp/"
          icon={FaLinkedin}
          label="LinkedIn"
        />
        <SocialButton
          href="https://leetcode.com/then00bprogrammer/"
          icon={SiLeetcode}
          label="Leetcode"
        />
        <SocialButton
          href="https://codeforces.com/profile/then00bprogrammer"
          icon={SiCodeforces}
          label="Codeforces"
        />
        <SocialButton
          href="https://twitter.com/NikhilRanjan02"
          icon={FaTwitter}
          label="Twitter"
        />
        <SocialButton href="" icon={FaEnvelope} label="Email" />
      </HStack>
      <Divider
        bg={useColorModeValue("black", "gold.600")}
        orientation="horizontal"
        height="1px"
      />
    </HStack>
  );
};

export default Social;
