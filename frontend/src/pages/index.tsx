import React, { useRef } from 'react'
import Banner from '@/components/Banner'
import Social from '@/components/Social'
import Services from '@/components/Services'
import Projects from '@/components/ViewProjects'
import Spacer from '@/components/Spacer'
import ContactMe from '@/components/ContactMe'
import { Flex, Stack, VStack, useColorModeValue } from '@chakra-ui/react'

const index = () => {
  return (
    <Stack bg={useColorModeValue('white','black')} >
      <Banner />
      <Social/>
      <Services/>
      <Spacer/>
      <Projects/>
      <ContactMe/>
    </Stack>
  )
}

export default index