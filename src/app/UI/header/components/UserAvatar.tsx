import { Avatar, WrapItem } from "@chakra-ui/react";
import React from "react";

interface Props {
  name: string;
}

export default function UserAvatar({ name }: Props) {
  return (
    <WrapItem display="flex" ml="auto" mr={20}>
      <Avatar
        name={name}
        w="40px"
        h="40px"
        rounded={100}
        border="2px solid #163A6E"
        bg="#163A6E"
        m="auto"
        color="#fff"
      />
    </WrapItem>
  );
}
