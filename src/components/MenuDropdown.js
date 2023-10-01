import {
  useDisclosure,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Box,
  Flex,
} from "@chakra-ui/react";
// import Link from "next/link";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { Link } from "react-router-dom";

const MenuDropdown = ({ data }) => {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <Menu isOpen={isOpen}>
      <Box
        h="100%"
        px="6"
        display="flex"
        alignItems="center"
        justifyContent="center"
        cursor="pointer"
        transition="all"
        transitionDuration="0.3s"
      >
        <Flex gap={2} alignItems="center">
          <Link to={data.link}>{data.text}</Link>
          <MenuButton onClick={onToggle}>
            {isOpen ? (
              <BiChevronUp fontSize={32} />
            ) : (
              <BiChevronDown fontSize={32} />
            )}
          </MenuButton>
        </Flex>
        <MenuList
          className="drop"
          marginTop="18px"
          marginLeft="-126px"
          py={3}
          borderRadius={0}
        >
          {data.children?.map((child) => (
            <MenuItem
              className="menu_item hover:opacity-60 hover:text-black"
              key={child.id}
            >
              <Link to={child.link}>{child.text}</Link>
            </MenuItem>
          ))}
        </MenuList>
      </Box>
    </Menu>
  );
};

export default MenuDropdown;
