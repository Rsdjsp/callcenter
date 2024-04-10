import { Button, Heading } from "@chakra-ui/react";

export const metadata = {
  title: "BDA - Data",
};

export default function Home() {
  return (
    <>
      <Heading as="h1" size="lg" m={0}>
        Data
      </Heading>
      <Button colorScheme="teal">Testing Chakra</Button>
    </>
  );
}
