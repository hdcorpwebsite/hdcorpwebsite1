import { Text, Box, Spacer, Stack, VStack } from "@chakra-ui/react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Footer from "../components/Footer";
import Info from "../components/Info";
import Navbar from "../components/Navbar";
import useMediaQuery from "../hooks/useMediaQuery";

const Products = () => {
  const smallscreen = useMediaQuery("(max-width: 480px)");

  let rd;
  let rc;
  if (smallscreen) {
    rd = (
      <>
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
            <Link href="https://reach-tech.com/reach_digitizer.html">
              <Image
                src="/sample.jpeg"
                objectFit="cover"
                width={"3000%"}
                height={"2000%"}
                alt="REACH DIGITIZER"
              />
            </Link>
            <VStack>
              <Spacer />
              <Box textAlign={"center"} marginTop="0rem">
                <Info
                  heading="REACH DIGITIZER"
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
      </>
    );
    rc = (
      <>
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
            <Link href="https://reach-tech.com/apparel-garment-clothing-fashion-cut-order-plan-planning-software-reach.html">
              <Image
                src="/sample.jpeg"
                objectFit="cover"
                width={"3000%"}
                height={"2000%"}
                alt="REACH CUT PLANNER"
              />{" "}
            </Link>
            <VStack>
              <Spacer />
              <Box textAlign={"center"} marginTop="0rem">
                <Info
                  heading="REACH CUT PLANNER"
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
      </>
    );
  } else {
    rd = (
      <>
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
            <VStack>
              <Spacer />
              <Box textAlign={"center"} marginTop="0rem">
                <Info
                  heading="REACH DIGITIZER"
                  info="                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
            in reprehenderit in voluptate velit esse cillum dolore eu fugiat"
                />
              </Box>
              <Spacer />
            </VStack>
            <Link href="https://reach-tech.com/reach_digitizer.html">
              <Image
                src="/sample.jpeg"
                objectFit="cover"
                width={"3000%"}
                height={"2000%"}
                alt="REACH DIGITIZER"
              />
            </Link>
          </Stack>
        </Box>
      </>
    );
    rc = (
      <>
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
            <VStack>
              <Spacer />
              <Box textAlign={"center"} marginTop="0rem">
                <Info
                  heading="REACH CUT PLANNER"
                  info="                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
            in reprehenderit in voluptate velit esse cillum dolore eu fugiat"
                />
              </Box>
              <Spacer />
            </VStack>{" "}
            <Link href="https://reach-tech.com/apparel-garment-clothing-fashion-cut-order-plan-planning-software-reach.html">
              <Image
                src="/sample.jpeg"
                objectFit="cover"
                width={"3000%"}
                height={"2000%"}
                alt="REACH CUT PLANNER"
              />
            </Link>
          </Stack>
        </Box>
      </>
    );
  }
  return (
    <Box overflow={"hidden"}>
      <Head>
        <title>HD Corp | Products</title>
      </Head>
      <Navbar />
      <Box textAlign={"center"} marginTop={smallscreen ? "1rem" : "3rem"}>
        <Text fontSize={smallscreen ? "2rem" : "3rem"} color="blue.700">
          Products
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
            <Link href="https://reach-tech.com/fashion-apparel-garment-clothing-cad-software-reach.html">
              <Image
                src="/sample.jpeg"
                objectFit="cover"
                width={"3000%"}
                height={"2000%"}
                alt="REACH CAD"
              />
            </Link>
            <VStack>
              <Spacer />
              <Box textAlign={"center"} marginTop="0rem">
                <Info
                  heading="REACH CAD"
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
            <Link href="https://reach-tech.com/fashion-studio-design-software-apparel-garment-clothing-textile-software-reach.html">
              <Image
                src="/sample.jpeg"
                objectFit="cover"
                width={"3000%"}
                height={"2000%"}
                alt="REACH FASHION STUDIO"
              />
            </Link>
            <VStack>
              <Spacer />
              <Box textAlign={"center"} marginTop="0rem">
                <Info
                  heading="REACH FASHION STUDIO"
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
        {/*REACH CUT PLANNER*/}
        {rc}
      </Box>
      <br />
      <br />
      <Footer />
    </Box>
  );
};

export default Products;
