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
  useBreakpointValue,
  useColorModeValue,
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

  const isSmall = useBreakpointValue([true, true, false, false]);

  const bgColor = isSmall
    ? useColorModeValue(
        undefined,
        alertStatus === "info" ? "blue.800" : "green.600"
      )
    : undefined;

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
        bottom={["0", "auto"]}
        bgColor={bgColor}
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
