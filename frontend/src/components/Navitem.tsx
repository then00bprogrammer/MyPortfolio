import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { HStack, Icon, Text, useColorModeValue } from '@chakra-ui/react';
import { IconType } from 'react-icons';

type Props = {
  text: string;
  link: string;
  icon: IconType;
}
const NavItem = ({ text, link, icon }: Props) => {
  const linkColor = useColorModeValue('black', '#C69749');
  return (
    <Link href={link}>
      <motion.div whileHover={{ borderBottom: `2px solid ${linkColor}` }}>
        <HStack>
          <Icon as={icon} />
          <Text letterSpacing='widest'>{text}</Text>
        </HStack>
      </motion.div>
    </Link>
  );
};

export default NavItem;
