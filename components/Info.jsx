import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import useMediaQuery from '../hooks/useMediaQuery';

const Info = (props) => {

  const smallscreen = useMediaQuery("(max-width: 720px)");

  return (
    <Box textAlign={"center"} marginTop="1rem">
        <Text fontSize={smallscreen?"2rem":"3rem"}>{props.heading}</Text>
        <Text marginRight={"1rem"} marginLeft={"1rem"} fontSize={smallscreen?"1rem":"1.5rem"}>{props.info}</Text>
    </Box>
  )
}

export default Info