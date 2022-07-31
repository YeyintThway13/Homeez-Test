const getNameAndImageBasedOnStage = (stage) => {
  if (stage === 1 || stage === 2) {
    return {
      name: "Sofa",
      image:
        "https://www.ulcdn.net/opt/www.ulcdn.net/images/products/94259/original/Apollo_Infinite_FNSF51APDU30000SAAAA_slide_00.jpg?1467963845",
    };
  }
  if (stage === 3 || stage === 4) {
    return {
      name: "TV",
      image:
        "https://i.gadgets360cdn.com/large/realme_smart_tv_neo_32_inch_1632472996440.jpg",
    };
  }
  if (stage === 5 || stage === 6) {
    return {
      name: "Coffee Table",
      image:
        "https://ii1.pepperfry.com/media/catalog/product/v/e/1100x1210/vega-coffee-table-with-stools-in-honey-finish-by-trendsbee-vega-coffee-table-with-stools-in-honey-fi-658vmq.jpg",
    };
  }
  if (stage === 7 || stage === 8) {
    return {
      name: "Dining Table",
      image:
        "https://i.pinimg.com/originals/3f/5d/e2/3f5de289a1657438e7fed22dab104018.jpg",
    };
  }
  if (stage === 9 || stage === 10) {
    return {
      name: "Bathtub",
      image:
        "https://www.badeloftusa.com/wp-content/uploads/2019/09/BW-02-XL-WHT-2020.jpg",
    };
  }
  if (stage === 11 || stage === 12) {
    return {
      name: "Bed",
      image:
        "https://static01.nyt.com/images/2020/10/25/realestate/19shopping1/oakImage-1602795344944-superJumbo.jpg",
    };
  }
  if (stage === 13 || stage === 14) {
    return {
      name: "Wardrobe",
      image:
        "https://www.ikea.com/ph/en/images/products/nodeland-wardrobe-with-3-doors-medium-brown__0836935_pe778611_s5.jpg?f=s",
    };
  }
  if (stage === 15 || stage === 16) {
    return {
      name: "cabinet",
      image:
        "https://secure.img1-cg.wfcdn.com/im/17953659/resize-h600-w600%5Ecompr-r85/3499/34991868/Cabinets+%26+Chests.jpg",
    };
  }
};

export default getNameAndImageBasedOnStage;
