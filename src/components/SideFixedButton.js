import React from "react";
import { Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import colours from "../utils/colours";

function FixedButton() {
  return (
    <Link to="/planner">
      <Box
        display={{ xl: "block", base: "none" }}
        fontSize="16px"
        lineHeight="19.92px"
        fontWeight={500}
        color="#fff"
        bgColor={colours.darkRed}
        px="32px"
        py="20px"
        textTransform="uppercase"
        transform="translateY(-50%) rotate(-90deg)"
        position="fixed"
        top="50%"
        right="-57px"
        zIndex={1000}
        borderTopRadius="10px"
        cursor="pointer"
      >
        Design Now
      </Box>
    </Link>
  );
}

export default FixedButton;
