import { Button } from "@chakra-ui/react";
import React from "react";

const MyButton = ({ outline, onClick, children }) => {
  return (
    <Button
      onClick={onClick}
      marginY="10px"
      bgColor={outline ? "transparent" : "#952732"}
      border={outline ? "1px solid #952732" : ""}
      color={outline ? "#952732" : "#fff"}
      _hover={{
        background: "#952732",
        color: "#fff",
      }}
    >
      {children}
    </Button>
  );
};

export default MyButton;
