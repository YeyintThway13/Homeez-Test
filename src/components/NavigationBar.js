import React from "react";
import { Link } from "react-router-dom";

import { RiCloseFill, RiMenu3Line, RiPhoneFill } from "react-icons/ri";

import {
  Box,
  Flex,
  Text,
  Hide,
  useDisclosure,
  Collapse,
  Icon,
  Spacer,
  Image,
} from "@chakra-ui/react";
import colours from "../utils/colours";
import { socialLinks, navLinks } from "../utils/data";
import HoverDropdown from "./MenuDropdown";
import MobileNavbar from "./MobileNavigationBar";

function NavigationBar() {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <>
      <Hide below="lg">
        <Box bg={colours.darkRed} py={3} px={{ xl: "120px", base: "20px" }}>
          <Flex justifyContent="right" alignItems="center">
            <Text color="white" fontSize="14px" lineHeight="19.8px">
              Call Now :&nbsp;
              <a href="tel:+959 000 000 000"> +959 000 000 000 </a>,&nbsp;
              <a
                href="tel:+
              959 111 222 333"
              >
                + 959 111 222 333
              </a>
            </Text>
            <Flex ml="80px" gap={4}>
              {socialLinks.map((link) => (
                <Box key={link.id}>
                  <Link to={link.url}>{link.icon}</Link>
                </Box>
              ))}
            </Flex>
          </Flex>
        </Box>
      </Hide>
      <Box position="sticky" zIndex={1000} top={0}>
        <Flex
          px={{ xl: "100px", base: "20px" }}
          // alignItems="center"
          h="80px"
          justifyContent="space-between"
          boxShadow="sm"
          pt={{ lg: 0, base: "18px" }}
          pb={{ lg: 0, base: "18px" }}
          bg={{ lg: "white", base: colours.darkRed }}
        >
          <Hide below="lg">
            <Image
              src="https://www.homeez.com/static/media/Homeez_Logo_Colour.76b1d6f0.svg"
              alt="Logo"
              width={159}
              height={79}
            />
          </Hide>
          <Hide above="lg">
            <Image
              src="https://www.homeez.com/static/media/Homeez_Logo_Colour.76b1d6f0.svg"
              alt="Logo"
              width="86.54px"
              height="43px"
            />
          </Hide>
          <Spacer display={{ lg: "block", base: "none" }} />

          <Flex
            display={{ lg: "flex", base: "none" }}
            fontSize="16px"
            fontWeight={500}
            alignItems="center"
            justifyContent="center"
            h="100%"
            // gap={35}
            // textTransform="uppercase"
            color="rgba(84, 84, 84, 1)"
          >
            {navLinks.map((navItem) => {
              return navItem?.children ? (
                <HoverDropdown data={navItem} key={navItem.text} />
              ) : (
                <Link to={navItem.link} key={navItem.text}>
                  <Box
                    h="100%"
                    px="6"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    cursor="pointer"
                    transition="all"
                    transitionDuration="0.3s"
                  >
                    {navItem.text}
                  </Box>
                </Link>
              );
            })}
          </Flex>
          <Flex
            alignItems="center"
            gap={6}
            display={{ xl: "none", lg: "none", base: "flex" }}
          >
            <a href="tel:+959 000 000 000">
              <Icon fontSize="24px" color="white">
                <RiPhoneFill />
              </Icon>
            </a>
            <Flex
              border="1px solid white"
              justifyContent="center"
              alignItems="center"
            >
              {isOpen ? (
                <Icon fontSize="24px" onClick={onToggle} color="white">
                  <RiCloseFill />
                </Icon>
              ) : (
                <Icon fontSize="24px" onClick={onToggle} color="white">
                  <RiMenu3Line />
                </Icon>
              )}
            </Flex>
          </Flex>
        </Flex>
        <Collapse in={isOpen} animateOpacity>
          <MobileNavbar />
        </Collapse>
      </Box>
    </>
  );
}

export default NavigationBar;
