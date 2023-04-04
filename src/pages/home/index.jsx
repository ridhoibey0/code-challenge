import { Companies } from "@/themes/components/Companies";
import { LandingPage } from "@/themes/components/Hero";
import { Navbar } from "@/themes/components/Navbar";
import { Box, Container, Text } from "@chakra-ui/react";
import React from "react";

const Home = () => {
  return (
    <Container maxW="container.xl">
      <Navbar />
      <LandingPage />
    </Container>
  );
};

export default Home;
