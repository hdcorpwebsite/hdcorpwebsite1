import { Text, Box, Spacer, Stack, VStack } from "@chakra-ui/react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Footer from "../components/Footer";
import Info from "../components/Info";
import Navbar from "../components/Navbar";
import useMediaQuery from "../hooks/useMediaQuery";

const CaseStudies = () => {
  const smallscreen = useMediaQuery("(max-width: 480px)");
  return (
    <Box overflow={"hidden"}>
      <Head>
        <title>HD Corp | Case Studies</title>
      </Head>
      <Navbar />
      <Box textAlign={"center"} marginTop={smallscreen ? "1rem" : "3rem"}>
        <Text fontSize={smallscreen ? "2rem" : "3rem"} color="blue.700">
          Case Studies
        </Text>
      </Box>
      <Box>
        {/* REACH CAD */}
        <Box
          textAlign={"center"}
          marginTop="3rem"
          marginLeft={smallscreen ? "0rem" : "10rem"}
          marginRight={smallscreen ? "0rem" : "10rem"}
        >
          <Stack
            direction={["column", "row"]}
            spacing="24px"
            marginLeft={smallscreen ? "0rem" : "-6rem"}
          >
            <Link href="https://reach-tech.com/">
              <Image
                src="/sample.jpeg"
                objectFit="cover"
                width={"3000%"}
                height={"2000%"}
                alt="REACH TECH"
              />
            </Link>
            <VStack>
              <Spacer />
              <Box textAlign={"center"} marginTop="0rem">
                <Info
                  heading="REACH TECH"
                  info="                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat"
                />
              </Box>
              <Spacer />
            </VStack>
          </Stack>
        </Box>
      </Box>
      <br />
      <br />
      <Footer />
    </Box>
  );
};

export default CaseStudies;
