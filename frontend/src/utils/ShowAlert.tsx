import React from "react";
import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  CloseButton,
  HStack,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";

type alertProps = {
  alertStatus: "info" | "warning" | "success" | "error" | "loading" | undefined;
  alertTitle: string;
  message: string;
  setIsAlertVisible: any;
};

const ShowAlert: React.FC<alertProps> = ({
  alertStatus,
  alertTitle,
  message,
  setIsAlertVisible,
}) => {
  const {
    isOpen: isVisible,
    onClose,
    onOpen,
  } = useDisclosure({ defaultIsOpen: true });

  return (
    isVisible && (
      <Alert
        status={alertStatus}
        position="fixed"
        width="-moz-fit-content"
        maxW={["90vw", "85vw"]}
        m="auto"
        alignItems="center"
        justifyContent="center"
        zIndex={101}
        bottom={[alertStatus==='info'?'0':'auto','auto']}
      >
        <Stack flexDir={["column", "row"]}>
          <HStack>
            <AlertIcon />
            <AlertTitle>{alertTitle}</AlertTitle>
          </HStack>
          <AlertDescription>{message}</AlertDescription>
        </Stack>
        <CloseButton
          alignSelf="flex-start"
          position="relative"
          right={-1}
          top={-1}
          onClick={() => {
            setIsAlertVisible(false);
          }}
        />
      </Alert>
    )
  );
};

export default ShowAlert;
