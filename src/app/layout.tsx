import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import style from "./layout.module.css";
import Link from "next/link";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className={style.container}>
          <header className={style.header}> 
                <Link href={"/"}>ONEBITE CINEMA</Link>
            </header>
          <main>{children}</main>
          <footer>제작 @hyen</footer>
        </div>
      </body>
    </html>
  );
}
