import React from 'react'
import useMediaQuery from "../hooks/useMediaQuery";
import {
    Box,
    Button,
    HStack,
    Input,
    Spacer,
    Stack,
    Text,
    Textarea,
    VStack,
  } from "@chakra-ui/react";
const Footer = () => {
    const smallscreen = useMediaQuery("(max-width: 480px)");
  return (
    <Box
    color={"white"}
    background={"blue.700"}
    height={smallscreen ? "45rem" : "30rem"}
    width="100%"
  >
    <br></br>
    <Box marginLeft={"2rem"}>
      <Text fontSize={smallscreen ? "2rem" : "3rem"}>Contact Us</Text>
      <Stack direction={["column", "row"]}>
        <Stack width={smallscreen ? "90%" : "30%"} color="blue.700">
          <Input background={"white"} placeholder="First Name" />
          <Input background={"white"} placeholder="Last Name" />
          <Input background={"white"} placeholder="Email" />
          <Input background={"white"} placeholder="Mobile No." />
          <Input background={"white"} placeholder="Subject" />
          <Textarea background={"white"} placeholder="Message" />
          <Button background="green.400" color="white">
            Submit
          </Button>
        </Stack>
        <br></br>
        <br></br>
        <br></br>
        <Spacer />
        <Stack fontSize={smallscreen ? "1rem" : "1.5rem"}>
          <Text>KCHS Layout</Text>
          <Text>Jnanabharathi Post</Text>
          <Text>Bengaluru - 560056, Karnataka</Text>
          <Text>India</Text>
          <Text>Ph. no. : +91 -</Text>
          <Text>email : </Text>
        </Stack>
        <Spacer />
      </Stack>
    </Box>
  </Box>
  )
}

export default Footer