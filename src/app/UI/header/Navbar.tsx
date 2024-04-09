"use client";
import { Avatar, Flex, WrapItem } from "@chakra-ui/react";
import React from "react";
import MainLogo from "./components/MainLogo";
import UserAvatar from "./components/UserAvatar";

export default function Navbar() {
  return (
    <Flex
      h="60px"
      as="nav"
      left={0}
      top={0}
      position="fixed"
      boxShadow={`0px 2px 36px -17px`}
      minW="100%"
      px={10}
    >
      <MainLogo />
      <UserAvatar name="John Doe" />
    </Flex>
  );
}
