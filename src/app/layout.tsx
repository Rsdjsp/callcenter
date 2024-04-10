import { Inter } from "next/font/google";
import { Providers } from "./providers";
import "./globals.css";
import { ReactNode } from "react";
import { Header } from "@/components/Header";
import { Flex } from "@chakra-ui/react";

interface Props {
  children?: ReactNode;
}
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Header />
          <Flex as="main" direction="column" flex={1} p={5}>
            {children}
          </Flex>
        </Providers>
      </body>
    </html>
  );
}
