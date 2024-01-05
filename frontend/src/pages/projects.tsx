import React, { useState, useEffect } from "react";
import Head from "next/head";
import {
  Box,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import client from "@/client";
import Banner from "@/components/Projects/Banner";
import Social from "@/utils/Social";
import ProjectCard from "@/components/Projects/ProjectCard";
import { useTheme } from "@/ThemeContext";
import Snowfall from "react-snowfall";
import ChangeTheme from "@/components/ChangeTheme";

type Project = {
  title: string;
  description: string;
  siteLink: string;
  githubRepoLink: string;
  projectPhoto: string;
  sidePhoto: string;
  color: string;
  id: string;
};

const projects = () => {
  const { isThemeOn } = useTheme();
  const [data, setData] = useState<Project[]>([]);

  const fetchPost = async () => {
    try {
      const res = await client.fetch(`*[_type == "post"] | order(priority) {
        title,
        description,
        siteLink,
        githubRepoLink,
        "sidePhoto":sidePhoto.asset->url,
        "projectPhoto":projectPhoto.asset->url,
        "color":themeColor,
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
    <>
      <Head>
        <title>Nikhil's Portfolio</title>
      </Head>
      <VStack
        w="full"
        minHeight={["90svh", "85svh"]}
        marginTop={["10svh", "15svh"]}
        spacing={0}
        bg={useColorModeValue("white", "black")}
      >
        <Box position="fixed" zIndex={9999} right={`calc(7.5vw - 2em)`} bottom="2.5vw" display={['none',useColorModeValue('none','block')]}>
          <ChangeTheme />
        </Box>
        { isThemeOn && <Snowfall snowflakeCount={600}/>}
        <Banner />
        <Social />
        {data &&
          data.map((proj, id) => (
            <ProjectCard project={proj} key={id} />
          ))}
      </VStack>
    </>
  );
};

export default projects;
