import { VStack, Box, Text, SimpleGrid, Image } from "@chakra-ui/react";
import React from "react";
import colours from "../utils/colours";

import Title from "./Title";

function CollaboratorCard({ src, alt }) {
  return <Image src={src} alt={alt} my="25px" />;
}

function Collaborators() {
  return (
    <Box bg="#fff" textColor="#111" width="100vw" maxW="100%">
      <Box
        maxW="1440px"
        mx="auto"
        pt={{ xl: "50px", lg: "40px", md: "30px", sm: "0px", base: "10px" }}
        px={{ xl: "100px", lg: "50px", md: "40px", sm: "32px", base: "16px" }}
      >
        {" "}
        <Title text="Our Collaborators" color={colours.darkRed} />
        <VStack marginTop="30px" marginBottom="50px">
          <Box>
            <Text
              fontSize={{
                xl: "22px",
                lg: "20px",
                md: "18px",
                sm: "16px",
                base: "14px",
              }}
              fontWeight="400"
              textAlign="center"
              lineHeight={{ md: 8, base: 6 }}
              letterSpacing={{ md: "1px", base: "0.5px" }}
            >
              Through our platform, we help you simplify some of the most
              complex steps of renovation with our Homeez proprietary A.I. tools
            </Text>
          </Box>
          <Box width="100%" maxWidth="1400px" py={5}>
            <SimpleGrid
              columns={{ md: 5, base: 4 }}
              columnGap={{ lg: 10, sm: 6, base: 2 }}
              rowGap={4}
              alignItems="center"
            >
              <CollaboratorCard
                src="https://www.homeez.com/static/media/best-logo.f61a205d.png"
                alt="Manchester"
              />
              <CollaboratorCard
                src="https://www.homeez.com/static/media/great-eastern-logo.000d1b60.png"
                alt="UNSW Sydney"
              />
              <CollaboratorCard
                src="https://www.homeez.com/static/media/ocbc-bank-logo.ea1a39a5.png"
                alt="UNSW Sydney"
              />
              <CollaboratorCard
                src="https://www.homeez.com/static/media/great-eastern-logo.000d1b60.png"
                alt="UNSW Sydney"
              />
              <CollaboratorCard
                src="https://www.homeez.com/static/media/ocbc-bank-logo.ea1a39a5.png"
                alt="UNSW Sydney"
              />
              <CollaboratorCard
                src="https://www.homeez.com/static/media/best-logo.f61a205d.png"
                alt="UNSW Sydney"
              />
              <CollaboratorCard
                src="https://www.homeez.com/static/media/great-eastern-logo.000d1b60.png"
                alt="UNSW Sydney"
              />
              <CollaboratorCard
                src="https://www.homeez.com/static/media/ocbc-bank-logo.ea1a39a5.png"
                alt="UNSW Sydney"
              />
              <CollaboratorCard
                src="https://www.homeez.com/static/media/best-logo.f61a205d.png"
                alt="UNSW Sydney"
              />
              <CollaboratorCard
                src="https://www.homeez.com/static/media/great-eastern-logo.000d1b60.png"
                alt="UNSW Sydney"
              />
            </SimpleGrid>
          </Box>
          <Box
            fontSize={{ lg: "18px", md: "17px", sm: "16px", base: "14px" }}
            fontWeight="400"
            // textTransform="uppercase"
            textAlign="center"
            lineHeight={{ md: 8, base: 2 }}
            letterSpacing={{ md: "1px", base: "0.5px" }}
          >
            Home renovation in Singapore has had its fair share of pleasant and
            unpleasant experiences, with more and more notorious cases about the
            lack of transparency in prices and in workmanship. The industry
            suffered further when the COVID-19 pandemic hit in 2020, bringing
            uncertainty across all homeowners’ minds and skyrocketing prices as
            renovation prices increase because of added regulatory requirements.
          </Box>
        </VStack>
      </Box>
    </Box>
  );
}

export default Collaborators;
