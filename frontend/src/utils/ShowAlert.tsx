import React from 'react'
import { Alert, AlertDescription, AlertIcon, AlertTitle, Box, Button, CloseButton, HStack, useDisclosure } from '@chakra-ui/react'

type Props = {
  success: boolean,
  message: string,
  setIsAlertVisible: any,
}

const ShowAlert = ({ success, message, setIsAlertVisible }: Props) => {
  const {
    isOpen: isVisible,
    onClose,
    onOpen,
  } = useDisclosure({ defaultIsOpen: true })

  return (
    isVisible && (
      <Alert status={success ? 'success' : 'error'} position='fixed' width='-moz-fit-content' right='12.5vw' alignItems='center' justifyContent='center'>
        <AlertIcon />
        <HStack>
          <AlertTitle>{success ? 'Success!' : 'Error'}</AlertTitle>
          <AlertDescription>
            {message}
          </AlertDescription>
        </HStack>
        <CloseButton
          alignSelf='flex-start'
          position='relative'
          right={-1}
          top={-1}
          onClick={()=>{
            setIsAlertVisible(false)
          }}
        />
      </Alert>
    )
  )
}

export default ShowAlert
