import { Box } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
// eslint-disable-next-line import/no-unresolved
import "swiper/css";
// eslint-disable-next-line import/no-unresolved
import "swiper/css/navigation";
// eslint-disable-next-line import/no-unresolved
import "swiper/css/pagination";

import Title from "./Title";
import CarouselItem from "./CarouselItem";
import { testinomialData } from "../utils/data";

function Carousel({ master }) {
  return (
    <Box w="100%">
      {!master && <Title text="Testimonial" />}

      <Box
        my="12"
        w={
          !master
            ? { xl: "1000px", lg: "900px", md: "95%", sm: "100%" }
            : "100%"
        }
        margin="auto"
      >
        <Swiper
          clickable
          pagination={{
            clickable: true,
          }}
          // pagination={true}
          modules={[Pagination]}
          className="mySwiper"
        >
          {testinomialData?.map((item) => (
            <SwiperSlide key={item.id}>
              <CarouselItem data={item} master={master} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
}

export default Carousel;
