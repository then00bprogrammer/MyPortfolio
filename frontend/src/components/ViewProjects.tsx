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
  Text,
  VStack,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";

import { Swiper, SwiperSlide } from "swiper/react";

import {
  Autoplay,
  Navigation,
  Pagination,
  EffectFade,
  Parallax,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import client from "@/client";

type ProjectSlide = {
  projectPhoto: string;
  id: string;
};

const Projects = () => {
  const ref = useRef(null);
  const router = useRouter();
  const [data, setData] = useState<ProjectSlide[]>();
  const { colorMode } = useColorMode();
  const fetchPost = async () => {
    try {
      const res = await client.fetch(`*[_type == "post"] | order(priority) {
        "projectPhoto":projectPhoto.asset->url,
        "id":_id
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
      h="100vh"
      w="full"
      pl="7.5vw"
      pr="7.5vw"
      justifyContent="space-between"
      color="black"
      position="relative"
      id="projects"
    >
      <Flex
        bg={useColorModeValue("red.400", "#C69749")}
        h="100vh"
        w="15vw"
        position="absolute"
        left={0}
        zIndex={1}
        alignItems="center"
        justifyContent="center"
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
      ></Divider>
      <HStack width="85%">
        <VStack lineHeight="2" letterSpacing="wider" w="50%" pl="5%" pr="5%">
          <Heading
            fontSize="7xl"
            fontWeight="extrabold"
            mt="2.5vh"
            mb="2.5vh"
            color={useColorModeValue("gray.800", "gray.100")}
          >
            PROJECTS
          </Heading>
          <Text mb="2.5vh" color={useColorModeValue("gray.600", "gray.400")}>
            A glimpse of realizations I've developed so far. Taking care of
            every need of my clients. Bringing performance and SEO on top of the
            charts. It doesn't matter whether it is about a simple business
            website or a live complex e-commerce webshop. Click the button to
            see my projects.
          </Text>
          <HStack>
            <Link href="./projects">
              <Button
                variant="solid"
                colorScheme={useColorModeValue("red", "gold")}
                borderRadius={0}
                size="lg"
                w="15vw"
                h="7.5vh"
              >
                View Projects
              </Button>
            </Link>
            <Button
              variant="outline"
              colorScheme={useColorModeValue("blackAlpha", "gold")}
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
          w="50%"
          alignItems="flex-start"
          lineHeight="2"
          letterSpacing="wider"
          position="relative"
          padding={5}
        >
          {colorMode === "dark" && (
            <Divider
              borderRadius={10}
              bg={useColorModeValue("red", "#735F32")}
              width="10px"
              h="100px"
              position="absolute"
              top={0}
              left={0}
            ></Divider>
          )}
          {colorMode === "dark" && (
            <Divider
              borderRadius={10}
              bg={useColorModeValue("red", "#735F32")}
              h="10px"
              w="100px"
              position="absolute"
              top={0}
              left={0}
            ></Divider>
          )}
          {colorMode === "dark" && (
            <Divider
              borderRadius={10}
              bg={useColorModeValue("red", "#735F32")}
              width="10px"
              h="100px"
              position="absolute"
              bottom={0}
              right={0}
            ></Divider>
          )}
          {colorMode === "dark" && (
            <Divider
              borderRadius={10}
              bg={useColorModeValue("red", "#735F32")}
              width="100px"
              h="10px"
              position="absolute"
              bottom={0}
              right={0}
            ></Divider>
          )}
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
      </HStack>
      <Divider
        width="1px"
        height="100vh"
        bg={useColorModeValue("black", "#735F32")}
      ></Divider>
    </HStack>
  );
};

export default Projects;
