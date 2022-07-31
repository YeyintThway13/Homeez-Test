import React from "react";
import { Flex, Image, Text } from "@chakra-ui/react";
import MyButton from "./Button";

const Confirmation = ({
  name,
  stage,
  image,
  setStage,
  buttonText,
  setState,
}) => {
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
        <Text fontSize="26px" fontWeight="black" color="#952732">
          Decoration For The Room
        </Text>
        <Text mt="20px">Do you want to add {name} to your house? </Text>
      </Flex>
      <Image src={image} />

      <Flex flexDir="column">
        <MyButton
          onClick={() => {
            setState(true);
            setStage(stage + 1);
          }}
        >
          {buttonText}
        </MyButton>
        <MyButton
          onClick={() => {
            setState(false);
            setStage(stage + 2);
          }}
          outline
        >
          Skip
        </MyButton>
      </Flex>
    </Flex>
  );
};

export default Confirmation;
