import { Flex } from "@chakra-ui/react";
import React, { useState } from "react";
import FloorPlan from "../components/FloorPlan";
import Furniture from "../components/Furniture";
import Sidebar from "../components/Sidebar";
import TextOnFloorPlan from "../components/TextOnFloorPlan";

const Planner = () => {
  const [sofa, setSofa] = useState(false);
  const [tv, setTV] = useState(false);
  const [coffeeTable, setCoffeeTable] = useState(false);
  const [diningTable, setDiningTable] = useState(false);
  const [bathtub, setBathtub] = useState(false);
  const [bed, setBed] = useState(false);
  const [wardrobe, setWardrobe] = useState(false);
  const [cabinet, setCabinet] = useState(false);
  const [stage, setStage] = useState(1);

  return (
    <div style={{ position: "relative", width: "100vw", height: "100vh" }}>
      {sofa && (
        <Furniture
          imageURL="https://api.homeez.com/v1/res?editor_res=17_3_seater_sofa.png"
          isTransform={stage === 2}
        />
      )}
      {tv && (
        <Furniture
          imageURL="https://api.homeez.com/v1/res?editor_res=12_built-in_tv_feature_wall_w_storage_display.png"
          isTransform={stage === 4}
        />
      )}
      {coffeeTable && (
        <Furniture
          imageURL="https://api.homeez.com/v1/res?editor_res=20_off-the-shelf_round_coffee_table.png"
          isTransform={stage === 6}
        />
      )}
      {diningTable && (
        <Furniture
          imageURL="https://api.homeez.com/v1/res?editor_res=23_6_seater_dining_table.png"
          isTransform={stage === 8}
        />
      )}
      {bathtub && (
        <Furniture
          imageURL="https://drive.google.com/uc?export=view&id=13UO6TVgDWaoPeRG6S9nHqZqZbuYPRmlj"
          isTransform={stage === 10}
        />
      )}
      {bed && (
        <Furniture
          imageURL="https://api.homeez.com/v1/res?editor_res=87_off-the-shelf_king_bed.png"
          isTransform={stage === 12}
        />
      )}
      {wardrobe && (
        <Furniture
          imageURL="https://api.homeez.com/v1/res?editor_res=56_built-in_open_wardrobe.png"
          isTransform={stage === 14}
        />
      )}
      {cabinet && (
        <Furniture
          imageURL="https://api.homeez.com/v1/res?editor_res=full_height_cabinet.png"
          isTransform={stage === 16}
        />
      )}
      <Flex justifyContent="space-between" alignItems="center">
        <FloorPlan />
        <Sidebar
          stage={stage}
          setStage={setStage}
          setSofa={setSofa}
          setTV={setTV}
          setCoffeeTable={setCoffeeTable}
          setDiningTable={setDiningTable}
          setBathtub={setBathtub}
          setBed={setBed}
          setWardrobe={setWardrobe}
          setCabinet={setCabinet}
        />
      </Flex>
      <TextOnFloorPlan />
    </div>
  );
};

export default Planner;
