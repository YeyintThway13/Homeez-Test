import { Flex } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import getNameAndImageBasedOnStage from "../utils/getNameAndImageBasedOnStage";
import Confirmation from "./Confirmation";
import ThankYouBox from "./ThankYouBox.js";

const Sidebar = ({
  setSofa,
  stage,
  setStage,
  setTV,
  setDiningTable,
  setCoffeeTable,
  setBathtub,
  setBed,
  setCabinet,
  setWardrobe,
}) => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  useEffect(() => {
    const data = getNameAndImageBasedOnStage(stage);
    setName(data?.name);
    setImage(data?.image);
  }, [stage]);
  return (
    <Flex>
      {stage === 1 && (
        <Confirmation
          setStage={setStage}
          setState={setSofa}
          stage={stage}
          name={name}
          buttonText="Yes"
          image={image}
        />
      )}
      {stage === 2 && (
        <Confirmation
          setStage={setStage}
          setState={setSofa}
          stage={stage}
          name={name}
          buttonText="Confirm"
          image={image}
        />
      )}
      {stage === 3 && (
        <Confirmation
          setStage={setStage}
          setState={setTV}
          stage={stage}
          name={name}
          buttonText="Yes"
          image={image}
        />
      )}
      {stage === 4 && (
        <Confirmation
          setStage={setStage}
          setState={setTV}
          stage={stage}
          name={name}
          buttonText="Confirm"
          image={image}
        />
      )}
      {stage === 5 && (
        <Confirmation
          setStage={setStage}
          setState={setCoffeeTable}
          stage={stage}
          name={name}
          buttonText="Yes"
          image={image}
        />
      )}
      {stage === 6 && (
        <Confirmation
          setStage={setStage}
          setState={setCoffeeTable}
          stage={stage}
          name={name}
          buttonText="Confirm"
          image={image}
        />
      )}
      {stage === 7 && (
        <Confirmation
          setStage={setStage}
          setState={setDiningTable}
          stage={stage}
          name={name}
          buttonText="Yes"
          image={image}
        />
      )}
      {stage === 8 && (
        <Confirmation
          setStage={setStage}
          setState={setDiningTable}
          stage={stage}
          name={name}
          buttonText="Confirm"
          image={image}
        />
      )}
      {stage === 9 && (
        <Confirmation
          setStage={setStage}
          setState={setBathtub}
          stage={stage}
          name={name}
          buttonText="Yes"
          image={image}
        />
      )}
      {stage === 10 && (
        <Confirmation
          setStage={setStage}
          setState={setBathtub}
          stage={stage}
          name={name}
          buttonText="Confirm"
          image={image}
        />
      )}
      {stage === 11 && (
        <Confirmation
          setStage={setStage}
          setState={setBed}
          stage={stage}
          name={name}
          buttonText="Yes"
          image={image}
        />
      )}
      {stage === 12 && (
        <Confirmation
          setStage={setStage}
          setState={setBed}
          stage={stage}
          name={name}
          buttonText="Confirm"
          image={image}
        />
      )}

      {stage === 13 && (
        <Confirmation
          setStage={setStage}
          setState={setWardrobe}
          stage={stage}
          name={name}
          buttonText="Yes"
          image={image}
        />
      )}
      {stage === 14 && (
        <Confirmation
          setStage={setStage}
          setState={setWardrobe}
          stage={stage}
          name={name}
          buttonText="Confirm"
          image={image}
        />
      )}

      {stage === 15 && (
        <Confirmation
          setStage={setStage}
          setState={setCabinet}
          stage={stage}
          name={name}
          buttonText="Yes"
          image={image}
        />
      )}
      {stage === 16 && (
        <Confirmation
          setStage={setStage}
          setState={setCabinet}
          stage={stage}
          name={name}
          buttonText="Confirm"
          image={image}
        />
      )}

      {(stage === 17 || stage === 18) && <ThankYouBox />}
    </Flex>
  );
};

export default Sidebar;
