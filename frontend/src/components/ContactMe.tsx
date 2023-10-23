import React from 'react';
import Link from 'next/link';
import {
  Button,
  Divider,
  Flex,
  Heading,
  Text,
  VStack,
  useColorModeValue,
} from '@chakra-ui/react';

const ContactMe: React.FC = () => {
  return (
    <Flex>
      <Divider
        width='1px'
        minH='70vh'
        bg={useColorModeValue('black', 'gold.500')}
        display={['none', 'flex']}
        position='absolute'
        left='7.5vw'
        zIndex={1}
      ></Divider>
      <Divider
        width='1px'
        minH='70vh'
        bg={useColorModeValue('black', 'gold.500')}
        display={['none', 'flex']}
        position='absolute'
        right='7.5vw'
        zIndex={1}
      ></Divider>
      <Flex
        position='relative'
        width={['100vw', `calc(100vw - 12px)`]}
        style={{
          height: '70vh',
          clipPath: 'polygon(0% 40%, 0% 100%, 100% 100%, 100% 0%)',
        }}
        zIndex={2}
        bgImage='https://img.freepik.com/free-vector/contact-us-icons-sketch_98292-4689.jpg'
      >
        <VStack
          width={['100vw', `calc(100vw - 12px)`]}
          style={{
            height: '70vh',
            clipPath: 'polygon(0% 40%, 0% 100%, 100% 100%, 100% 0%)',
          }}
          color='white'
          paddingTop='35vh'
          backgroundColor={useColorModeValue(
            'blackAlpha.800',
            'blackAlpha.900'
          )}
          id='contact'
          pl='7.5%'
          pr='7.5%'
        >
          <Heading size='2xl' mb='2.5vh'>
            CONTACT
          </Heading>
          <Text
            lineHeight={2}
            letterSpacing='wider'
            mb='2.5vh'
            fontSize={['xs', 'sm']}
          >
            Any questions or need a website, logo design or something else?
            Don't hesitate to contact me.
          </Text>
          <Link href='http://localhost:3000/contact'>
            <Button
              variant='solid'
              colorScheme='green'
              borderRadius={0}
              size='lg'
            >
              Contact Me
            </Button>
          </Link>
        </VStack>
      </Flex>
    </Flex>
  );
};

export default ContactMe;
