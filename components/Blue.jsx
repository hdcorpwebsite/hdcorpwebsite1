import { Box, Button } from '@chakra-ui/react'
import React from 'react'

const Blue = (props) => {
  return (
    <Box>
        <Button width="20rem" height="3rem" marginLeft="2rem" background={"blue.700"} textAlign={"center"}>{props.name}</Button>
    </Box>
  )
}

export default Blue