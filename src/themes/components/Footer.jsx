import React from "react";
import {
  Box,
  HStack,
  VStack,
  Text,
  Container,
  Flex,
  Heading,
  Divider,
} from "@chakra-ui/react";

export const Footer = () => {
  return (
    <>
      <Box
        w="full"
        h="191px"
        p={8}
        alignItems="center"
        gap={4}
        mb={4}
        pos="absolute"
        bottom={-650}
        backgroundColor="#F8F8FF"
      >
        <Flex justify="space-between" align="start" w="full">
          <Flex left="0" marginLeft="20px" h="100%">
            <VStack align="start">
              <HStack>
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
              <Text>
                Lorem ipsum dolor sit amet, <br></br> consectetur adipiscing
                elit sed do eiusmod tempor <br></br> incididunt ut labore et
                dolore.
              </Text>
            </VStack>
          </Flex>
          <Flex right="0" marginRight="45px" h="100%" gap={20}>
            <VStack align="start">
              <Heading fontSize="28px">Company</Heading>
              <Text>Home</Text>
              <Text>Blogs</Text>
              <Text>Careers</Text>
              <Text>Portfolios</Text>
            </VStack>
            <VStack align="start">
              <Heading fontSize="28px">Links</Heading>
              <Text>Privacy & Policy</Text>
              <Text>Github</Text>
              <Text>Support</Text>
              <Text>FAQs</Text>
            </VStack>
            <VStack align="start">
              <Heading fontSize="28px">Contact</Heading>
              <Text>
                Jl. Narogong. Perum <br /> Cileungsi Elok Blok <br /> A No.5.
                Jakarta Selatan. 12240
              </Text>
            </VStack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};
