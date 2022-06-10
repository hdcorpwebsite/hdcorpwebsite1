import { Text, Box, Spacer, Stack, VStack } from "@chakra-ui/react";
import Head from "next/head";
import Image from 'next/image'
import React from "react";
import Footer from "../components/Footer";
import Info from "../components/Info";
import Navbar from "../components/Navbar";
import useMediaQuery from "../hooks/useMediaQuery";

const Services = () => {
  const smallscreen = useMediaQuery("(max-width: 480px)");

  let rd;
  if(smallscreen)
  {
      rd =<>        <Box
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
        <Image
          src="/sample.jpeg"
          objectFit="cover"
          width={"3000%"}
          height={"2000%"}
          alt="Training"
        />
        <VStack>
          <Spacer />
          <Box textAlign={"center"} marginTop="0rem">
            <Info
              heading="Training"
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
    </Box></>
  }
  else
  {
      rd=<>        <Box
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
        <VStack>
          <Spacer />
          <Box textAlign={"center"} marginTop="0rem">
            <Info
              heading="Training"
              info="                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
            in reprehenderit in voluptate velit esse cillum dolore eu fugiat"
            />
          </Box>
          <Spacer />
        </VStack>
        <Image
          src="/sample.jpeg"
          objectFit="cover"
          width={"3000%"}
          height={"2000%"}
          alt="Training"
        />
      </Stack>
    </Box></>
  }
  return (
    <Box overflow={"hidden"}>
      <Head>
        <title>HD Corp | Services</title>
      </Head>
      <Navbar />
      <Box textAlign={"center"} marginTop={smallscreen ? "1rem" : "3rem"}>
          <Text fontSize={smallscreen ? "2rem" : "3rem"} color="blue.700">
            Services
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
            <Image
              src="/sample.jpeg"
              objectFit="cover"
              width={"3000%"}
              height={"2000%"}
              alt="Implementation"
            />
            <VStack>
              <Spacer />
              <Box textAlign={"center"} marginTop="0rem">
                <Info
                  heading="Implementation"
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
        {/*REACH DIGITIZER*/}
        {rd}
        {/*REACH FASHION STUDIO*/}
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
            <Image
              src="/sample.jpeg"
              objectFit="cover"
              width={"3000%"}
              height={"2000%"}
              alt="Skill Development"
            />
            <VStack>
              <Spacer />
              <Box textAlign={"center"} marginTop="0rem">
                <Info
                  heading="Skill Development"
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

export default Services;
