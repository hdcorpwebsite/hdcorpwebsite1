import {
  Box,
  Button,
  HStack,
  Spacer,
  Text,
  VStack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import useMediaQuery from "../hooks/useMediaQuery";
import Link from 'next/link'
import { HamburgerIcon } from '@chakra-ui/icons'

const Navbar = () => {
  const smallscreen = useMediaQuery("(max-width: 480px)");
  let screen;
  if (smallscreen) {
    screen = (
      <>
        <HStack width={"100%"}>
          <Spacer />
          <Link href="/"><Box><Text fontSize={"2rem"}>HD Corp</Text> </Box></Link>
          <Spacer />
          <Spacer />
          <Spacer />
          <Spacer />
          <Spacer />
          <Spacer />
          <Menu>
            <MenuButton as={Button}><HamburgerIcon /></MenuButton>
            <MenuList fontSize={"1.5rem"}>
            <Link href="/Products"><MenuItem>Proudcts</MenuItem></Link>
            <Link href="/Services"><MenuItem>Services</MenuItem></Link>
            <Link href="/Customers"><MenuItem>Customers</MenuItem></Link>
            <Link href="/CaseStudies"><MenuItem>Case Studies</MenuItem></Link>
            </MenuList>
          </Menu>
          <Spacer />
        </HStack>
      </>
    );
  } else {
    screen = (
      <>
        <HStack width={"100%"}>
          <Spacer />
          <Link href="/"><Box><Text>HD Corp</Text></Box></Link>
          <Spacer />
          <Spacer />
          <Spacer />
          <Spacer />
          <Spacer />
          <Spacer />
          <Spacer />
          <Spacer />
          <Spacer />
          <Spacer />
          <Spacer />
          <Spacer />
          <Spacer />
          <Link href="/Products"><Button>Products</Button></Link>
          <Link href="/Services"><Button>Services</Button></Link>
          <Link href="/Customers"><Button>Customers</Button></Link>
          <Link href="/CaseStudies"><Button>Case Studies</Button></Link>
          <Spacer />
        </HStack>
      </>
    );
  }

  return (
    <>
      <VStack
        height={"5rem"}
        width="100%"
        color={"blue.700"}
        fontSize={"2.5rem"}
        textAlign={"center"}
      >
        <Spacer />
        {screen}
        <Spacer />
      </VStack>
      <hr></hr>
    </>
  );
};

export default Navbar;
