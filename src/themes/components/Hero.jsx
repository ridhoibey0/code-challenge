import React from "react";
import Icon1 from "@/assets/8.svg";
import IconCard from "@/assets/icon1.png";
import {
  chakra,
  Card,
  Flex,
  VStack,
  Text,
  Button,
  HStack,
  Box,
  Image,
  CardBody,
  CardFooter,
  ButtonGroup,
  SimpleGrid,
  Heading,
  Stack,
} from "@chakra-ui/react";

import HeroImage from "@/assets/hero.png";
import Women from "@/assets/women.png";
import CardI from "@/assets/cardI.png";
import Star from "@/assets/star.png";
import Check from "@/assets/check.svg";

export const LandingPage = () => {
  const servicesDefinition = [
    {
      icon: Icon1,
      category: "Starter",
      isPrimary: false,
      definition: `Free class access for that
      start learning code and
      design`,
    },
    {
      icon: Icon1,
      isPrimary: false,
      category: "Premium",
      definition: "Advance material from the Starter & learn to build project",
    },
    {
      icon: Icon1,
      isPrimary: true,
      category: "Premium",
      definition: "Advance material from the Starter & learn to build project",
    },
    {
      icon: Icon1,
      isPrimary: false,
      category: "Premium",
      definition: "Advance material from the Starter & learn to build project",
    },
  ];
  return (
    <>
      <Flex align="center" justify="space-between" marginTop={100}>
        <VStack align="start" ms={75} spacing={6}>
          <Text fontFamily="Manrope" fontWeight={700} color="#8C82FC">
            S U X Z M A K E I T E A S Y
          </Text>
          <Text
            fontSize="48px"
            lineHeight="62.5px"
            color="secondary"
            w="15ch"
            fontFamily="Manrope"
            fontWeight="bold"
          >
            Find Your Way Of Success
          </Text>
          <Text fontSize="20px" lineHeight="33px" w="45ch">
            We help you to increase self-confidence and train yourself in a
            direction, and make you more creative in developing a work
          </Text>
          <HStack spacing={8}>
            <Button
              bg="#8C82FC
"
              color="white"
            >
              Get Started
            </Button>
            <Button bg="#E5E5E5">Our Services</Button>
          </HStack>
        </VStack>
        <Box pos="relative">
          <Image
            src={HeroImage}
            style={{
              objectFit: "contain",
            }}
            width={400}
            height={500}
            mr={55}
          />
          <Card
            rounded="10px"
            shadow="0px 15px 30px 0px rgba(0, 0, 0, 0.1)"
            top="0"
            left="-20%"
            position="absolute"
          >
            <CardBody>
              <Text
                fontFamily="sourceSansPro"
                fontWeight="semibold"
                color="#BAB8D2"
              >
                Member
              </Text>
              <Text fontFamily="sourceSansPro" fontWeight="bold" color="black">
                70,200
              </Text>
              <HStack>
                <Image src={Icon1} />
              </HStack>
            </CardBody>
          </Card>
        </Box>
      </Flex>
      <Box w="full" p={8} alignItems="center" mb={4}>
        <VStack align="start">
          <Text
            fontFamily="dmSans"
            fontWeight="bold"
            fontSize="18px"
            lineHeight="23.44px"
          >
            Learning
          </Text>
          <Text
            fontFamily="dmSans"
            fontWeight="bold"
            fontSize="35px"
            w="25ch"
            lineHeight="40px"
          >
            Online Learning Platform International Curriculum
          </Text>
          <Text fontFamily="dmSans" fontSize="18px" lineHeight="23.44px">
            Study and understand the material <br></br> class is more relaxed
            without time limit.
          </Text>
          <SimpleGrid column={4} spacing={4}>
            <HStack align="start">
              <Card maxW="sm">
                <CardBody>
                  <Image
                    w="80px"
                    h="80px"
                    src={IconCard}
                    alt="Green double couch with wooden legs"
                    borderRadius="lg"
                  />
                  <Stack mt="6" spacing="3">
                    <Heading size="sm">Living room Sofa</Heading>
                    <Text>
                      Free class access for that start learning code and design
                    </Text>
                  </Stack>
                </CardBody>
                <CardFooter>
                  <Button variant="solid" colorScheme="blue">
                    Buy now
                  </Button>
                </CardFooter>
              </Card>
              <Card maxW="sm">
                <CardBody>
                  <Image
                    w="80px"
                    h="80px"
                    src={IconCard}
                    alt="Green double couch with wooden legs"
                    borderRadius="lg"
                  />
                  <Stack mt="6" spacing="3">
                    <Heading size="sm">Premium</Heading>
                    <Text>
                      Advanced material from the Starter & learn to build
                      projects
                    </Text>
                  </Stack>
                </CardBody>
                <CardFooter>
                  <Button variant="solid" colorScheme="blue">
                    Buy now
                  </Button>
                </CardFooter>
              </Card>
              <Card
                maxW="sm"
                bg="#8C82FC;
"
                color="white"
              >
                <CardBody>
                  <Image
                    w="80px"
                    h="80px"
                    src={IconCard}
                    alt="Green double couch with wooden legs"
                    borderRadius="lg"
                  />
                  <Stack mt="6" spacing="3">
                    <Heading size="sm">Superstar</Heading>
                    <Text>
                      Materials for experts who have completed the premium
                      package
                    </Text>
                  </Stack>
                </CardBody>
                <CardFooter>
                  <Button variant="solid" colorScheme="blue">
                    Buy now
                  </Button>
                </CardFooter>
              </Card>
              <Card maxW="sm">
                <CardBody>
                  <Image
                    w="80px"
                    h="80px"
                    src={IconCard}
                    alt="Green double couch with wooden legs"
                    borderRadius="lg"
                  />
                  <Stack mt="6" spacing="3">
                    <Heading size="sm">Bootcamp</Heading>
                    <Text>
                      Informatics science training program with the latest
                      material
                    </Text>
                  </Stack>
                </CardBody>
                <CardFooter>
                  <Button variant="solid" colorScheme="blue">
                    Buy now
                  </Button>
                </CardFooter>
              </Card>
            </HStack>
          </SimpleGrid>
        </VStack>
      </Box>
      <Box w="full" p={8} alignItems="center" mb={5}>
        <SimpleGrid columns={2} spacing="55px">
          <Box height="80px" pos="relative" borderRadius={15}>
            <Image src={Women} />
            <Card
              rounded="10px"
              shadow="0px 15px 30px 0px rgba(0, 0, 0, 0.1)"
              maxW="292px"
              pos="absolute"
              bottom="-550%"
              right="10"
            >
              <CardBody>
                <Flex align="start" justify="space-between">
                  <Image src={CardI} p={2} />
                  <VStack ml={1} p={2}>
                    <Text fontSize={18} fontWeight="bold">
                      Sarah Manrope <br />
                      <Box
                        color="#A2B3BF
"
                        fontSize={15}
                        as="span"
                      >
                        Designer
                      </Box>
                    </Text>
                    <Image src={Star} />
                  </VStack>
                </Flex>
              </CardBody>
            </Card>
          </Box>
          <Box height="80px">
            <Text
              fontFamily="dmSans"
              fontWeight="bold"
              fontSize="18px"
              lineHeight="23.44px"
            >
              Learning
            </Text>
            <Text
              fontFamily="dmSans"
              fontWeight="bold"
              fontSize="35px"
              w="25ch"
              lineHeight="40px"
            >
              Online Learning Platform International Curriculum
            </Text>
            <Text fontFamily="dmSans" fontSize="18px" lineHeight="23.44px">
              Study and understand the material <br></br> class is more relaxed
              without time limit.
            </Text>
            <HStack mt="5">
              <Image src={Check} />
              <Text fontFamily="dmSans" fontSize="18px" lineHeight="23.44px">
                Study and produce creation to get a job
              </Text>
            </HStack>
            <HStack mt="5">
              <Image src={Check} />
              <Text fontFamily="dmSans" fontSize="18px" lineHeight="23.44px">
                Up to date material and created by expert creators
              </Text>
            </HStack>
            <HStack mt="5">
              <Image src={Check} />
              <Text fontFamily="dmSans" fontSize="18px" lineHeight="23.44px">
                Complete classes and projects and get a certificate from us
              </Text>
            </HStack>
          </Box>
        </SimpleGrid>
      </Box>
      <Box
        w="full"
        h="191px"
        display="grid"
        gridTemplateColumns="repeat(3, 1fr)"
        p={8}
        alignItems="center"
        bg="#203271"
        gap={4}
        mb={4}
        pos="absolute"
        bottom={-650}
      >
        <HStack align="start" spacing={4}>
          <VStack align="start">
            <Text
              color="white"
              fontFamily="dmSans"
              fontWeight="bold"
              fontSize="18px"
              lineHeight="23.44px"
            >
              Company
            </Text>
            <Text
              color="rgba(255, 255, 255, 0.8)"
              fontFamily="dmSans"
              fontSize="16px"
              fontWeight="normal"
              lineHeight="26px"
            >
              Home
            </Text>
            <Text
              color="rgba(255, 255, 255, 0.8)"
              fontFamily="dmSans"
              fontSize="16px"
              fontWeight="normal"
              lineHeight="26px"
            >
              Blogs
            </Text>
            <Text
              color="rgba(255, 255, 255, 0.8)"
              fontFamily="dmSans"
              fontSize="16px"
              fontWeight="normal"
              lineHeight="26px"
            >
              Careers
            </Text>
          </VStack>
        </HStack>
        <HStack align="start" spacing={4}>
          <VStack align="start">
            <Text
              color="white"
              fontFamily="dmSans"
              fontWeight="bold"
              fontSize="18px"
              lineHeight="23.44px"
            >
              Company
            </Text>
            <Text
              color="rgba(255, 255, 255, 0.8)"
              fontFamily="dmSans"
              fontSize="16px"
              fontWeight="normal"
              lineHeight="26px"
            >
              Home
            </Text>
            <Text
              color="rgba(255, 255, 255, 0.8)"
              fontFamily="dmSans"
              fontSize="16px"
              fontWeight="normal"
              lineHeight="26px"
            >
              Blogs
            </Text>
            <Text
              color="rgba(255, 255, 255, 0.8)"
              fontFamily="dmSans"
              fontSize="16px"
              fontWeight="normal"
              lineHeight="26px"
            >
              Careers
            </Text>
          </VStack>
        </HStack>
        <HStack align="start" spacing={4}>
          <VStack align="start">
            <Text
              color="white"
              fontFamily="dmSans"
              fontWeight="bold"
              fontSize="18px"
              lineHeight="23.44px"
            >
              Company
            </Text>
            <Text
              color="rgba(255, 255, 255, 0.8)"
              fontFamily="dmSans"
              fontSize="16px"
              fontWeight="normal"
              lineHeight="26px"
            >
              Home
            </Text>
            <Text
              color="rgba(255, 255, 255, 0.8)"
              fontFamily="dmSans"
              fontSize="16px"
              fontWeight="normal"
              lineHeight="26px"
            >
              Blogs
            </Text>
            <Text
              color="rgba(255, 255, 255, 0.8)"
              fontFamily="dmSans"
              fontSize="16px"
              fontWeight="normal"
              lineHeight="26px"
            >
              Careers
            </Text>
          </VStack>
        </HStack>
      </Box>
    </>
  );
};
