import { Flex, Stack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import colours from "../utils/colours";
import { navLinks } from "../utils/data";
import MobileDropdown from "./Dropdown";

const MobileNavbar = () => {
  return (
    <Stack
      bg={colours.darkRed}
      p={4}
      display={{ lg: "none" }}
      color="white"
      w="100vw"
      css={{ position: "absolute" }}
      fontSize={18}
    >
      {navLinks?.map((navItem) =>
        navItem?.children ? (
          <MobileDropdown data={navItem} key={navItem.text} />
        ) : (
          <Flex
            key={navItem.text}
            height="14"
            paddingX="2"
            marginY="2"
            alignItems="center"
          >
            <Link to={navItem.link}>
              <Text fontSize="18px">{navItem.text}</Text>
            </Link>
          </Flex>
        )
      )}
    </Stack>
  );
};

export default MobileNavbar;
