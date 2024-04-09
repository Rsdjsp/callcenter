import { Inter } from "next/font/google";
import { Providers } from "./providers";
import "./globals.css";
import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
