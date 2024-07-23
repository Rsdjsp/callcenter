"use client";

import { Flex, Img } from "@chakra-ui/react";
import { Link } from "@chakra-ui/react";

import NextLink from "next/link";
import UserAvatar from "./UserAvatar";

interface NavLink {
  title: string;
  path: string;
}

const navLinks: NavLink[] = [
  {
    title: "Data",
    path: "/",
  },
  {
    title: "Accounts",
    path: "/accounts",
  },
];

export function Header() {
  return (
    <Flex
      as="header"
      p={5}
      alignItems={"center"}
      justifyContent={"space-between"}
      gap={5}
      boxShadow={`0px 2px 36px -17px`}
    >
      <Img alt="main logo" width="300px" src={"/next.svg"} />
      <Flex as="nav" flex={1} alignItems={"center"} gap={5}>
        {navLinks.map((link) => (
          <Link
            as={NextLink}
            key={link.title}
            href={link.path}
            colorScheme="blue"
          >
            {link.title}
          </Link>
        ))}
      </Flex>
      <UserAvatar name="John Doe" />
    </Flex>
  );
}
