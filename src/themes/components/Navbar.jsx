import { Box, Flex, HStack, Text, Link } from "@chakra-ui/react";
import React from "react";

export const Navbar = () => {
  const menu = [
    {
      name: "Home",
      isBold: true,
      color: "#394360",
    },
    {
      name: "Learnings",
      isBold: false,
      color: "#394360",
    },
    {
      name: "About Us",
      isBold: false,
      color: "#394360",
    },
    {
      name: "Testimonial",
      isBold: false,
      color: "#394360",
    },
  ];
  return (
    <Box as="nav" display="flex" justifyContent="space-between" marginTop={5}>
      <Flex align="center" gap={6}>
        <HStack pr={10}>
          <svg
            width="41"
            height="50"
            viewBox="0 0 41 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M35 25L17.5 50L0 25L17.5 0" fill="#E1DFFC" />
            <path d="M41 25L23.5 50L6 25L23.5 0" fill="#8C82FC" />
          </svg>
          <Text
            fontSize="18px"
            fontWeight={700}
            lineHeight="22.63px"
            color="secondary"
          >
            Suxz
          </Text>
        </HStack>
        {menu.map((el, i) => (
          <Link
            _hover={{
              textDecoration: "none",
            }}
            key={el.name}
          >
            <Text
              fontSize="16px"
              lineHeight="20.11px"
              color={el.color}
              fontWeight={el.isBold ? "600" : "400"}
            >
              {el.name}
            </Text>
          </Link>
        ))}
      </Flex>
      <HStack spacing={8}>
        <Text
          fontSize="16px"
          lineHeight="20.83px"
          color="secondary"
          fontWeight={700}
        >
          Login
        </Text>
        <Box
          h="37px"
          w="117px"
          display="flex"
          alignItems="center"
          justifyContent="center"
          borderWidth={1.5}
          borderColor="secondary"
          borderRadius="10px"
          backgroundColor="#8C82FC"
        >
          <Text
            fontSize="16px"
            lineHeight="20.83px"
            color="white"
            fontWeight={700}
          >
            Book Now
          </Text>
        </Box>
      </HStack>
    </Box>
  );
};
