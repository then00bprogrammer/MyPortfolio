import { Flex, Text } from "@chakra-ui/react";
import React from "react";

type SideBannerProps = {
  title: string;
  sidePhoto?: string;
  isBlurred: boolean;
  isLeftAligned: boolean;
  bgColor: string;
};

const SideBanner: React.FC<SideBannerProps> = ({
  title,
  bgColor,
  sidePhoto,
  isBlurred,
  isLeftAligned,
}) => {
  return (
    <Flex
      bgColor={bgColor}
      bgImage={sidePhoto}
      bgSize="cover"
      minH={["90svh", "85svh"]}
      w="15vw"
      position="absolute"
      left={isLeftAligned ? 0 : "auto"}
      right={!isLeftAligned ? 0 : "auto"}
      zIndex={1}
      alignItems="center"
      justifyContent="center"
      filter={isBlurred ? "blur(1px)" : "blur(0px)"}
      display={["none", "flex"]}
    >
      <Text
        transform="rotate(180deg)"
        style={{ writingMode: "vertical-rl" }}
        fontSize="6xl"
        fontWeight="bold"
        color="white"
        margin="auto"
      >
        {title}
      </Text>
    </Flex>
  );
};

export default SideBanner;
