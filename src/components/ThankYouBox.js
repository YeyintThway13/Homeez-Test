import React from "react";
import { Flex, Image, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

import MyButton from "./Button";

const ThankYouBox = () => {
  const navigate = useNavigate();
  return (
    <Flex
      width="400px"
      boxShadow="2px 0px 23px -1px rgba(0,0,0,0.3)"
      height="80vh"
      padding="20px"
      //   mr="20px"
      flexDir="column"
      textAlign="center"
      justifyContent="space-between"
    >
      <Flex flexDir="column">
        <Text fontSize="32px" fontWeight="black" color="#952732">
          Thank You
        </Text>
        <Text mt="20px">
          Make sure you comeback next time and create new house designs.
        </Text>
      </Flex>
      <Image src="https://d1wli5mq9yq9mw.cloudfront.net/files/cards/thumbs/png/med/CANOE108.png?v=f405b15203ea1daa467d49e32069b38e558e7e1c" />

      <Flex flexDir="column">
        <MyButton onClick={() => navigate("/")}>Back To Home</MyButton>
      </Flex>
    </Flex>
  );
};

export default ThankYouBox;
