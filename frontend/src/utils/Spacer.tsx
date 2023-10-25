import React from 'react';
import { Divider, HStack, useColorModeValue } from '@chakra-ui/react';

const Spacer:React.FC = () => {
  return (
    <HStack
      h={['0','10vh']}
      w='full'
      pl='7.5vw'
      pr='7.5vw'
      justifyContent='space-between'
      color='black'
    >
      <Divider display={['none','flex']} width='1px' height='100vh' bg={useColorModeValue('black','gold.600')}></Divider>
      <Divider display={['none','flex']} width='1px' height='100vh' bg={useColorModeValue('black','gold.600')}></Divider>
    </HStack>
  );
};

export default Spacer;
