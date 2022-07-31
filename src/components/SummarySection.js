import { Box, Flex, Text, Image } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

import Title from "./Title";
import MyButton from "./Button";

function SummarySection() {
  const navigate = useNavigate();
  return (
    <Box>
      <Flex
        justifyContent="space-around"
        mt={{ md: "10", base: "6" }}
        flexWrap="wrap"
        gridGap={{ md: "20px", sm: "8px", base: "0" }}
      >
        <Text
          fontSize={{ xl: "38px", md: "24px", sm: "18px", base: "14px" }}
          fontWeight={900}
          borderLeft="4px solid #952732"
          px={{ sm: "15px", base: "10px" }}
          mx={{ xl: "8", lg: "8", md: "4", base: 0 }}
        >
          Painting
        </Text>

        <Text
          fontSize={{ xl: "38px", md: "24px", sm: "18px", base: "14px" }}
          fontWeight={900}
          borderLeft="4px solid #952732"
          px={{ sm: "15px", base: "10px" }}
          mx={{ xl: "8", lg: "8", md: "4", base: 0 }}
        >
          Dismantling
        </Text>
        <Text
          fontSize={{ xl: "38px", md: "24px", sm: "18px", base: "14px" }}
          fontWeight={900}
          borderLeft="4px solid #952732"
          px={{ sm: "15px", base: "10px" }}
          mx={{ xl: "8", lg: "8", md: "4", base: 0 }}
        >
          Hacking
        </Text>
        <Text
          fontSize={{ xl: "38px", md: "24px", sm: "18px", base: "14px" }}
          fontWeight={900}
          borderLeft="4px solid #952732"
          px={{ sm: "15px", base: "10px" }}
          mx={{ xl: "8", lg: "8", md: "4", base: 0 }}
        >
          Carpentry
        </Text>
      </Flex>
      <Flex
        my={{ md: "50px", base: 4 }}
        alignItems="center"
        display={{
          xl: "flex",
          lg: "flex",
          md: "none",
          sm: "none",
          base: "none",
        }}
      >
        <Flex
          direction="column"
          px={{ xl: "100px", lg: "50px" }}
          justifyContent="center"
          alignItems="flex-start"
        >
          <Box
            w="100%"
            display="flex"
            flexDirection="column"
            alignItems="flex-start"
            position="relative"
          >
            <Title text="Welcome to Homeez" notCenter />
          </Box>
          <Text py={{ md: "20px" }}>
            The Acumen International College came into being in early 2021, it
            was established to provide high quality education and training to
            students from School to University level. The group consists of
            Schools, Academies of higher education, College and University.
          </Text>
          <Box alignSelf="flex-start" my="4">
            <MyButton
              onClick={() => navigate("/planner")}
              href=""
              color="black"
            >
              Design Now
            </MyButton>
          </Box>
        </Flex>
        <Flex
          width="180%"
          height={{ xl: "450px", lg: "350px" }}
          position="relative"
        >
          <Flex
            height="100%"
            width="100%"
            position="absolute"
            background="-webkit-linear-gradient(left, 
       rgb(255, 255, 255) 0%, 
        rgba(0,0,0,0) 20%,
        rgba(0,0,0,0) 80%,
        rgba(0,0,0,0.65) 100%
      )"
          />
          <Image
            src="https://www.homeez.com/static/media/escrowpayment.955152fc.jpg"
            alt="Welcome"
            objectFit="cover"
            boxShadow="0 0 20px black inset"
          />
        </Flex>
      </Flex>
      <Flex
        display={{
          xl: "none",
          lg: "none",
          md: "flex",
          sm: "flex",
          base: "flex",
        }}
        justifyContent="center"
        alignItems="center"
        flexDir="column"
        textAlign="center"
        my="50px"
        px="20px"
      >
        <Title text="Welcome to Homeez" />
        <Text
          display="block"
          maxW={600}
          mx="auto"
          my={{ lg: "42px", base: "24px" }}
          fontSize={{ lg: "18px", md: "18px", sm: "16px", base: "15px" }}
          lineHeight={{ xl: "38px", lg: "38px", md: "38px", base: "30px" }}
        >
          With us, don’t worry about contractors leaving you in the lurch. With
          Online Escrow, Homeez holds your funds until the works are done and
          workmanship is approved by you! This protects your funds while
          ensuring that contractors uphold the quality that you deserve.
        </Text>
        <MyButton onClick={() => navigate("/planner")} href="" color="black">
          Design Now
        </MyButton>
      </Flex>
    </Box>
  );
}

export default SummarySection;
