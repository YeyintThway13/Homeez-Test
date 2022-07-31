import { Box, Image, Text } from "@chakra-ui/react";

function CarouselItem({ data, master }) {
  return (
    <Box
      pt={{ xl: "100px", lg: "100px", md: "80px", sm: "70px", base: "70px" }}
      pb="10"
    >
      <Box
        margin="auto"
        w={
          master
            ? "95%"
            : { xl: "800px", lg: "750px", md: "680px", sm: "90%", base: "95%" }
        }
        h={{ xl: "300px", lg: "300px", md: "280px", base: "fit-content" }}
        borderRadius={{ md: "35px", base: "25px" }}
        border="2px solid #952732"
        pos="relative"
        px={{ xl: "40px", lg: "35px", md: "25px", sm: "20px", base: "20px" }}
        py={{ xl: "50px", lg: "50px", md: "40px", sm: "35px", base: "25px" }}
      >
        <Image
          alt="vector icon"
          pos="absolute"
          top={0}
          left={0}
          marginTop="-15px"
          marginLeft="35px"
          src="https://netbizimpact.com/IMG/58-588437_resultado-de-imagen-para-quotation-marks-overlays-transparent.png"
          backgroundColor="white"
          h={{ xl: "25px", lg: "25px", md: "20px", sm: "18px", base: "15px" }}
          px="10px"
        />
        <Image
          alt="testimonial photo"
          pos="absolute"
          top={0}
          right={0}
          marginTop={{ sm: "-10%", base: "-15%" }}
          marginRight={{ sm: "35px", base: "20px" }}
          src={data.photo}
          backgroundColor="white"
          h={{
            xl: "150px",
            lg: "150px",
            md: "120px",
            sm: "100px",
            base: "90px",
          }}
          w={{
            xl: "150px",
            lg: "150px",
            md: "120px",
            sm: "100px",
            base: "90px",
          }}
          borderRadius="100%"
        />
        <Box>
          <Text
            fontWeight={500}
            fontSize={{ xl: "20px", lg: "20px", md: "20px", base: "18px" }}
          >
            {data.name}
          </Text>
          <Text fontSize="14px">
            {data.university} <br />
            {data.program}
          </Text>
        </Box>
        <Text
          my={{ xl: "8", lg: "8", md: "6", base: "6" }}
          fontSize={{
            xl: "18px",
            lg: "18px",
            md: "16px",
            sm: "16px",
            base: "14px",
          }}
        >
          “{data.speech}”
        </Text>
      </Box>
    </Box>
  );
}

export default CarouselItem;
