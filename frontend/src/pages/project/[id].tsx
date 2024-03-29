import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Box, VStack, useColorModeValue } from "@chakra-ui/react";
import Features from "@/components/Project/Features";
import Technology from "@/components/Project/Technology";
import client from "@/client";
import Social from "@/utils/Social";
import Head from "next/head";
import Banner from "@/components/Project/Banner";
import ShowAlert from "@/utils/ShowAlert";
import Loading from "@/utils/Loading";
import { useTheme } from "@/ThemeContext";
import Snowfall from "react-snowfall";

type Project = {
  title: string;
  description: string;
  siteLink: string;
  githubRepoLink: string;
  projectPhoto: string;
  sidePhoto: string;
  color: string;
  techStackNames: string[];
  features: string[];
  techStackDescription: any[];
  projectVideoLink: string;
  alertMessage?: string;
};

export const config = {
  runtime: "experimental-edge",
};

const Project = () => {
  const { isThemeOn } = useTheme();
  const router = useRouter();
  const [data, setData] = useState<Project | null>(null);
  const [isAlertVisible, setIsAlertVisible] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      const articleId = router.query.id;
      try {
        const res = await client.fetch(
          `*[_type == "post" && _id == $articleId]{
              title,
              "projectPhoto":projectPhoto.asset->url,
              projectVideoLink,
              description,
              siteLink,
              githubRepoLink,
              features,
              techStackDescription,
              techStackNames,
              projectVideoLink,
              alertMessage
            }`,
          { articleId }
        );
        setData(res[0]);
        setIsAlertVisible(res[0].alertMessage ? true : false);
      } catch (error) {
        console.error("Error fetching post:", error);
      }
    };

    fetchData();
  }, [router.query.id]);
  return (
    <>
      <Head>
        <title>Nikhil's Portfolio</title>
      </Head>
      {data && (
        <VStack
          w="full"
          minH={["90svh", "85svh"]}
          spacing={0}
          bg={useColorModeValue("white", "black")}
          marginTop={["10svh", "15svh"]}
        >
          {isThemeOn && <Snowfall />}
          {data!.alertMessage && isAlertVisible && (
            <ShowAlert
              alertTitle="Important"
              message={data!.alertMessage}
              alertStatus="info"
              setIsAlertVisible={setIsAlertVisible}
            />
          )}
          <Banner
            title={data!.title}
            description={data!.description}
            siteLink={data!.siteLink}
            githubRepoLink={data!.githubRepoLink}
            projectPhoto={data!.projectPhoto}
            projectVideoLink={data!.projectVideoLink}
          />
          <Social />
          <Features features={data!.features} />
          <Technology
            description={data!.techStackDescription}
            techStack={data!.techStackNames}
          />
        </VStack>
      )}
    </>
  );
};

export default Project;
