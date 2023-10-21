import React, { useRef } from 'react'
import Banner from '@/components/Banner'
import Social from '@/components/Social'
import Services from '@/components/Services'
import Projects from '@/components/ViewProjects'
import Spacer from '@/components/Spacer'
import ContactMe from '@/components/ContactMe'

const index = () => {
  return (
    <>
      <Banner />
      <Social/>
      <Services/>
      <Spacer/>
      <Projects/>
      <ContactMe/>
    </>
  )
}

export default index