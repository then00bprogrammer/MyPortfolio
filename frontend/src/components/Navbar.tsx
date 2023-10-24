import React from 'react';
import Link from 'next/link';
import {
  Flex,
  HStack,
  Icon,
  Text,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import { IoHome, IoPersonSharp } from 'react-icons/io5';
import { AiOutlineFundProjectionScreen } from 'react-icons/ai';
import { LuContact } from 'react-icons/lu';
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';

import PhoneMenu from './PhoneMenu';
import NavItem from './Navitem';

const Navbar:React.FC = () => {
  const { toggleColorMode } = useColorMode();

  return (
    <Flex
      position='fixed'
      zIndex={100}
      top={0}
      w='full'
      h={['10vh', '15vh']}
      justifyContent='space-between'
      alignItems='center'
      padding='5vh 7.5vw'
      bg={useColorModeValue('white', 'black')}
      color={useColorModeValue('black', 'gold.500')}
    >
      <Link href='/'>
        <Text fontSize='4xl' fontWeight='extrabold'>
          Nr.
        </Text>
      </Link>
      <HStack
        as='nav'
        fontSize='lg'
        width='50%'
        justifyContent='flex-end'
        spacing={['2', '10']}
      >
        <HStack spacing={10} display={['none', 'none', 'block', 'flex']}>
          <NavItem text='Home' link='/' icon={IoHome} />
          <NavItem text='Services' link='#' icon={IoPersonSharp} />
          <NavItem
            text='Projects'
            link='/projects'
            icon={AiOutlineFundProjectionScreen}
          />
          <NavItem text='Contact' link='/contact' icon={LuContact} />
        </HStack>
        <Icon
          cursor='pointer'
          boxSize='9'
          as={useColorModeValue(BsFillMoonFill, BsFillSunFill)}
          onClick={toggleColorMode}
        ></Icon>
        <PhoneMenu />
      </HStack>
    </Flex>
  );
};

export default Navbar;
