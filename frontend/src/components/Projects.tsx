import React, { useEffect, useState, useRef } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import {
  Button,
  Divider,
  Flex,
  HStack,
  Heading,
  Image,
  Stack,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import client from "@/client";
import Frame from "@/components/Frame";

import SolidButton from "./SolidButton";

type ProjectSlide = {
  projectPhoto: string;
  id: string;
};

const Projects = () => {
  const router = useRouter();
  const [data, setData] = useState<ProjectSlide[]>();
  const fetchPost = async () => {
    try {
      const res = await client.fetch(`*[_type == 'post'] | order(priority) {
        'projectPhoto':projectPhoto.asset->url,
        'id':_id
      }`);
      setData(res);
    } catch (error) {
      console.error("Error fetching post:", error);
    }
  };
  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <HStack
      h={['90vh','85vh']}
      w="full"
      pl="7.5vw"
      pr="7.5vw"
      justifyContent="space-between"
      color="black"
      position="relative"
      id="projects"
    >
      <Flex
        bg={useColorModeValue("red.400", "gold.500")}
        h={['90vh','85vh']}
        w="15vw"
        position="absolute"
        left={0}
        zIndex={1}
        alignItems="center"
        justifyContent="center"
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
          PROJECTS
        </Text>
      </Flex>
      <Divider
        width="1px"
        height="100vh"
        bg={useColorModeValue("black", "#735F32")}
        display={["none", "flex"]}
      ></Divider>
      <Stack w={["100%", "85%"]} direction={["column", "row"]}>
        <VStack
          lineHeight="2"
          letterSpacing="wider"
          w={["100%", "50%"]}
          pl={["0%", "5%"]}
          pr={["0%", "5%"]}
        >
          <Heading
            fontSize={["4xl", "7xl"]}
            fontWeight="extrabold"
            mt="2.5vh"
            mb="2.5vh"
            color={useColorModeValue("gray.700", "yellow.100")}
          >
            PROJECTS
          </Heading>
          <VStack
            w={["100%", "50%"]}
            alignItems="flex-start"
            lineHeight="2"
            letterSpacing="wider"
            position="relative"
            padding={5}
            display={["flex", "none"]}
            marginBottom="2.5vh"
          >
            <Frame />
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper"
            >
              {data &&
                data.map((slide, id) => (
                  <SwiperSlide key={id}>
                    <Image
                      src={slide.projectPhoto}
                      onClick={() => router.push(`./project/${slide.id}`)}
                      _hover={{ filter: "brightness(80%)", cursor: "pointer" }}
                    ></Image>
                  </SwiperSlide>
                ))}
            </Swiper>
          </VStack>
          <Text mb="2.5vh" color={useColorModeValue("gray.600", "gray.400")}>
            A glimpse of realizations I've developed so far. It doesn't matter
            whether it is about a simple business website or a live complex
            e-commerce webshop. Click the button to see my projects.
          </Text>
          <HStack>
            <Link href="./projects">
              <SolidButton>View Projects</SolidButton>
            </Link>
            <Button
              variant="outline"
              colorScheme={useColorModeValue("black", "gold")}
              borderRadius={0}
              size="lg"
              onClick={() => {
                const section = document.querySelector("#contact");
                section?.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
            >
              Read More
            </Button>
          </HStack>
        </VStack>
        <VStack
          w={["100%", "50%"]}
          alignItems="flex-start"
          lineHeight="2"
          letterSpacing="wider"
          position="relative"
          padding={5}
          display={["none", "flex"]}
        >
          <Frame />
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            {data &&
              data.map((slide, id) => (
                <SwiperSlide key={id}>
                  <Image
                    src={slide.projectPhoto}
                    onClick={() => router.push(`./project/${slide.id}`)}
                    _hover={{ filter: "brightness(80%)", cursor: "pointer" }}
                  ></Image>
                </SwiperSlide>
              ))}
          </Swiper>
        </VStack>
      </Stack>
      <Divider
        width="1px"
        height="100vh"
        bg={useColorModeValue("black", "#735F32")}
        display={["none", "flex"]}
      ></Divider>
    </HStack>
  );
};

export default Projects;
