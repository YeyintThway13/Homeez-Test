import React from "react";
import { Flex, Text, Box, useDisclosure } from "@chakra-ui/react";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { Link } from "react-router-dom";

import colours from "../utils/colours";

const MobileDropdown = ({ data }) => {
  const { text, link, children } = data;
  const { isOpen, onToggle } = useDisclosure();
  return (
    <Box paddingX="2">
      <Flex alignItems="center" gap={4} py={4} justifyContent="space-between">
        <Link to={link}>
          <Text fontSize="18px">{text}</Text>
        </Link>
        {isOpen ? (
          <BiChevronUp fontSize={32} onClick={onToggle} />
        ) : (
          <BiChevronDown fontSize={32} onClick={onToggle} />
        )}
      </Flex>
      {isOpen && (
        <Box paddingX={6}>
          {children.map((child) => (
            <Link to={child.link} key={child.id}>
              <Box py={3}>
                <Text fontSize={16} color={colours.white}>
                  {child.text}
                </Text>
              </Box>
            </Link>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default MobileDropdown;
