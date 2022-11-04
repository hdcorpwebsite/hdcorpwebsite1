import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import { Box, Button, Spacer, Stack, Text, VStack } from "@chakra-ui/react";
import Blue from "../components/Blue";
import useMediaQuery from "../hooks/useMediaQuery";
import Footer from "../components/Footer";

export default function Home() {
  const smallscreen = useMediaQuery("(max-width: 480px)");

  let productscode;
  let customerscode;

  {
    /*Products*/
  }
  if (smallscreen) {
    productscode = (
      <Stack direction={["column", "row"]} spacing="24px" textAlign={"center"}>
        <VStack color="white">
          <Spacer />
          <Link href="https://reach-tech.com/fashion-apparel-garment-clothing-cad-software-reach.html">
            <Button
              width="20rem"
              height="3rem"
              marginLeft="2rem"
              background={"blue.700"}
              textAlign={"center"}
            >
              REACH CAD
            </Button>
          </Link>
          <Link href="https://reach-tech.com/reach_digitizer.html">
            <Button
              width="20rem"
              height="3rem"
              marginLeft="2rem"
              background={"blue.700"}
              textAlign={"center"}
            >
              REACH DIGITIZER
            </Button>
          </Link>
          <Link href="https://reach-tech.com/fashion-studio-design-software-apparel-garment-clothing-textile-software-reach.html">
            <Button
              width="20rem"
              height="3rem"
              marginLeft="2rem"
              background={"blue.700"}
              textAlign={"center"}
            >
              REACH FASHION STUDIO
            </Button>
          </Link>
          <Link href="https://reach-tech.com/apparel-garment-clothing-fashion-cut-order-plan-planning-software-reach.html">
            <Button
              width="20rem"
              height="3rem"
              marginLeft="2rem"
              background={"blue.700"}
              textAlign={"center"}
            >
              REACH CUT PLANNER
            </Button>
          </Link>
          <Spacer />
        </VStack>
        <Box textAlign={"center"}>
          <Text
            marginRight={"1rem"}
            marginLeft={"1rem"}
            fontSize={smallscreen ? "1rem" : "1.5rem"}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat
          </Text>
          <br></br>
          <Link href="/Products">
            <Button variant={"link"}>Read More</Button>
          </Link>
        </Box>
      </Stack>
    );
  } else {
    productscode = (
      <Stack direction={["column", "row"]} spacing="24px">
        <VStack maxWidth={"50%"} textAlign={"center"}>
          <Spacer />
          <Text
            marginRight={"1rem"}
            marginLeft={"1rem"}
            fontSize={smallscreen ? "1rem" : "1.5rem"}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat
          </Text>
          <br></br>
          <Link href="/Products">
            <Button variant={"link"}>Read More</Button>
          </Link>
          <Spacer />
        </VStack>
        <Spacer />
        <Spacer />
        <VStack color="white">
          <Spacer />
          <Link href="https://reach-tech.com/fashion-apparel-garment-clothing-cad-software-reach.html">
            <Button
              width="20rem"
              height="3rem"
              marginLeft="2rem"
              background={"blue.700"}
              textAlign={"center"}
            >
              REACH CAD
            </Button>
          </Link>
          <Link href="https://reach-tech.com/reach_digitizer.html">
            <Button
              width="20rem"
              height="3rem"
              marginLeft="2rem"
              background={"blue.700"}
              textAlign={"center"}
            >
              REACH DIGITIZER
            </Button>
          </Link>
          <Link href="https://reach-tech.com/fashion-studio-design-software-apparel-garment-clothing-textile-software-reach.html">
            <Button
              width="20rem"
              height="3rem"
              marginLeft="2rem"
              background={"blue.700"}
              textAlign={"center"}
            >
              REACH FASHION STUDIO
            </Button>
          </Link>
          <Link href="https://reach-tech.com/apparel-garment-clothing-fashion-cut-order-plan-planning-software-reach.html">
            <Button
              width="20rem"
              height="3rem"
              marginLeft="2rem"
              background={"blue.700"}
              textAlign={"center"}
            >
              REACH CUT PLANNER
            </Button>
          </Link>
          <Spacer />
        </VStack>
        <Spacer />
      </Stack>
    );
  }
  {
    /*Customers*/
  }
  if (smallscreen) {
    customerscode = (
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
          alt="customers"
        />
        <Spacer />
        <VStack>
          <Spacer />
          <Box textAlign={"center"} marginTop="3rem">
            <Text
              marginRight={"1rem"}
              marginLeft={"1rem"}
              fontSize={smallscreen ? "1rem" : "1.5rem"}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
            </Text>
            <br></br>
            <Link href="/Customers">
              <Button variant={"link"}>Read More</Button>
            </Link>
          </Box>
          <Spacer />
        </VStack>
      </Stack>
    );
  } else {
    customerscode = (
      <Stack direction={["column", "row"]} spacing="24px" marginRight={"5rem"}>
        <VStack>
          <Spacer />
          <Box textAlign={"center"} marginTop="3rem">
            <Text
              marginRight={"1rem"}
              marginLeft={"1rem"}
              fontSize={smallscreen ? "1rem" : "1.5rem"}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
            </Text>
            <br></br>
            <Link href="/Customers">
              <Button variant={"link"}>Read More</Button>
            </Link>
          </Box>
          <Spacer />
        </VStack>
        <Spacer />
        <Image
          src="/sample.jpeg"
          objectFit="cover"
          width={"2500%"}
          height={"1500%"}
          alt="customers"
        />
      </Stack>
    );
  }

  return (
    <Box overflow={"hidden"}>
      <Head>
        <title>HD Corp | IT services</title>
      </Head>
      <Navbar />
      <br />
      {/* ABOUT US */}
      <Box
        marginLeft={smallscreen ? "0rem" : "2rem"}
        marginRight={smallscreen ? "0rem" : "2rem"}
      >
        <Box textAlign={"center"} marginTop={smallscreen ? "1rem" : "3rem"}>
          <Text fontSize={smallscreen ? "2rem" : "3rem"} color="blue.700">
            About Us
          </Text>
        </Box>
        <br />
        <Stack direction={["column", "row"]} spacing="24px">
          <Image
            src="/sample.jpeg"
            objectFit="cover"
            width={"2000%"}
            height={"1200%"}
            alt="aboutus"
          />
          <VStack>
            <Spacer />
            <Box textAlign={"center"} marginTop="3rem">
              <Text fontSize={smallscreen ? "1rem" : "1.5rem"}>
                HD Corp is the preferred partner to provide IT, IT enabled
                Services, CAD , CAM solutions with consulting & implementation
                capabilities for the Apparel Industry & Training Institutes
                providing apparel manufacturing courses.
              </Text>
              <br />
              <Text
                fontSize={smallscreen ? "1.5rem" : "2rem"}
                color={"blue.700"}
              >
                Vision
              </Text>
              <Text fontSize={smallscreen ? "1rem" : "1.5rem"}>
                Local Partner with Global Reach
              </Text>
              <br />
              <Text
                fontSize={smallscreen ? "1.5rem" : "2rem"}
                color={"blue.700"}
              >
                Mission
              </Text>
              <Text fontSize={smallscreen ? "1rem" : "1.5rem"}>
                To enable Apparel Industry to optimize the resources by
                providing best in class products & solutions
              </Text>
            </Box>
            <Spacer />
          </VStack>
        </Stack>
        <br />
        Products
        <Box textAlign={"center"} marginTop={smallscreen ? "1rem" : "3rem"}>
          <Text fontSize={smallscreen ? "2rem" : "3rem"} color="blue.700">
            Products
          </Text>
        </Box>
        {productscode}
        <br />
        {/* Services*/}
        <Box textAlign={"center"} marginTop={smallscreen ? "1rem" : "3rem"}>
          <Text fontSize={smallscreen ? "2rem" : "3rem"} color="blue.700">
            Services
          </Text>
        </Box>
        <Stack direction={["column", "row"]} spacing="24px">
          <VStack color="white">
            <Spacer />
            <Blue name="Implementation" />
            <Blue name="Training" />
            <Blue name="Skill Development" />
            <Spacer />
          </VStack>
          <VStack textAlign={"center"}>
            <Spacer />
            <Text
              marginRight={"1rem"}
              marginLeft={"1rem"}
              fontSize={smallscreen ? "1rem" : "1.5rem"}
              maxWidth={smallscreen ? "100%" : "70%"}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
            </Text>
            <br></br>
            <Link href="/Services">
              <Button variant={"link"}>Read More</Button>
            </Link>
            <Spacer />
          </VStack>
        </Stack>
      </Box>
      <br />
      {/*Customers*/}
      <Box textAlign={"center"} marginTop={smallscreen ? "1rem" : "3rem"}>
        <Text fontSize={smallscreen ? "2rem" : "3rem"} color="blue.700">
          Customers
        </Text>
      </Box>
      <br></br>
      <br></br>
      {customerscode}

      {/*Case Studies */}
      <Box
        textAlign={"center"}
        marginTop="3rem"
        marginLeft={smallscreen ? "0rem" : "10rem"}
        marginRight={smallscreen ? "0rem" : "10rem"}
      >
        <Text color="blue.700" fontSize={smallscreen ? "2rem" : "3rem"}>
          Case Studies
        </Text>
        <br></br>
        <br></br>
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
            alt="Case Study"
          />
          <Spacer />
          <VStack>
            <Spacer />
            <Box textAlign={"center"} marginTop="3rem">
              <Text
                marginRight={"1rem"}
                marginLeft={"1rem"}
                fontSize={smallscreen ? "1rem" : "1.5rem"}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
              </Text>
              <br></br>
              <Link href="/CaseStudies">
                <Button variant={"link"}>Read More</Button>
              </Link>
            </Box>
            <Spacer />
          </VStack>
        </Stack>
      </Box>
      <br />
      {/*Footer*/}
      <br />
      <Footer />
    </Box>
  );
}
