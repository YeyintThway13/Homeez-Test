import { Box, Text } from "@chakra-ui/react";
import React from "react";
import colours from "../utils/colours";

function Footer() {
  return (
    <Box bg={colours.darkRed} textColor="#fff" width="100vw" maxW="100%">
      <Text fontSize="12px" textAlign="center" paddingY="20px">
        © 2022 Lorum UNIVERSITY. All rights reserved.
      </Text>
    </Box>
  );
}

export default Footer;
