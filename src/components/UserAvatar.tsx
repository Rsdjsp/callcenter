import { Avatar } from "@chakra-ui/react";
import React from "react";

interface Props {
  name: string;
}

export default function UserAvatar({ name }: Props) {
  return (
    <Avatar
      name={name}
      w="40px"
      h="40px"
      rounded={100}
      border="2px solid #163A6E"
      bg="#163A6E"
      color="#fff"
    />
  );
}
