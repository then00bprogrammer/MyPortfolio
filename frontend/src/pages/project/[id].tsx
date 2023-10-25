import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { VStack, useColorModeValue } from "@chakra-ui/react";
import Features from "@/components/Project/Features";
import Technology from "@/components/Project/Technology";
import client from "@/client";
import Social from "@/utils/Social";
import Head from "next/head";
import Banner from "@/components/Project/Banner";

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
  techStackDescription: string;
  projectVideoLink: string;
};

export const config = {
  runtime: "experimental-edge",
};

const Project = () => {
  const router = useRouter();
  const [data, setData] = useState<Project | null>(null);

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
              projectVideoLink
            }`,
          { articleId }
        );
        setData(res[0]);
      } catch (error) {
        console.error("Error fetching post:", error);
      }
    };

    fetchData();
  }, [router.query.id]);

  if (data)
    return (
      <>
        <Head>
          <title>Nikhil's Portfolio</title>
        </Head>
        <VStack
          w="full"
          minH={["90vh", "85vh"]}
          spacing={0}
          bg={useColorModeValue("white", "black")}
          marginTop={["10vh", "15vh"]}
        >
          <Banner
            title={data.title}
            description={data.description}
            siteLink={data.siteLink}
            githubRepoLink={data.githubRepoLink}
            projectPhoto={data.projectPhoto}
            projectVideoLink={data.projectVideoLink}
          />
          <Social />
          <Features features={data.features} />
          <Technology
            description={data.techStackDescription}
            techStack={data.techStackNames}
          />
        </VStack>
      </>
    );
  else return null;
};

export default Project;
