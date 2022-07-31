import { Box, Text } from "@chakra-ui/react";

function Title({ text, notCenter, uppercase }) {
  return (
    <Box
      w="100%"
      display="flex"
      flexDirection="column"
      alignItems={notCenter ? { md: "flex-start", base: "center" } : "center"}
      position="relative"
    >
      <Text
        // textAlign="center"
        color="black"
        fontWeight={900}
        fontSize={{ xl: "34px", lg: "30px", md: "25px", base: "25px" }}
        mb="1"
        textTransform={!uppercase ? "unset" : "uppercase"}
      >
        {text}
      </Text>
    </Box>
  );
}

export default Title;
