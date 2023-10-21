import React, { useEffect, useState } from "react";
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
  const router = useRouter();
  const [data, setData] = useState<ProjectSlide[]>();
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
    >
      <Flex
        bg="red.400"
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
      <Divider width="1px" height="100vh" bg="black"></Divider>
      <HStack width="85%">
        <VStack lineHeight="2" letterSpacing="wider" w="50%" pl="5%" pr="5%">
          <Heading fontSize="7xl" fontWeight="extrabold" mt="2.5vh" mb="2.5vh">
            PROJECTS
          </Heading>
          <Text color="gray.600" mb="2.5vh">
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
                colorScheme="red"
                borderRadius={0}
                size="lg"
                w="15vw"
                h="7.5vh"
                color="white"
              >
                View Projects
              </Button>
            </Link>
            <Button
              variant="outline"
              colorScheme="blackAlpha"
              borderRadius={0}
              size="lg"
              color="black"
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
        >
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
              data.map((slide) => (
                <SwiperSlide>
                  <Image
                    src={slide.projectPhoto}
                    onClick={() => router.push(`./project/${slide.id}`)}
                    _hover={{ filter: "brightness(90%)", cursor: "pointer" }}
                  ></Image>
                </SwiperSlide>
              ))}
          </Swiper>
        </VStack>
      </HStack>
      <Divider width="1px" height="100vh" bg="black"></Divider>
    </HStack>
  );
};

export default Projects;
