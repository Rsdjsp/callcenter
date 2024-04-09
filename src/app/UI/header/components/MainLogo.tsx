import { Box, Image } from "@chakra-ui/react";
import React from "react";
import logo from "../../../../../public/Business-Debt-Adjusters-LLC-logo.png";

export default function MainLogo() {
  return (
    <Box my="auto" >
      <Image alt="main logo" width="300px" src={logo.src} />
    </Box>
  );
}
