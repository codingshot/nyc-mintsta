"use client";
import Header from "@/components/header";
import "./globals.css";
import "@near-wallet-selector/modal-ui/styles.css";
import { Inter } from "next/font/google";
import Footer from "@/components/footer";
import Providers from "@/providers/providers";
import Navigation from "@/components/navigation";
import Modal from "@/components/modal";
;

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} flex min-h-screen flex-col items-center justify-between`}
      >
        <div className="flex flex-col min-h-screen relative bg-mainBg w-screen">
          <Providers>
            <Navigation>
              <Header />
              <Footer />
            </Navigation>

            {children}

            <Modal></Modal>
          </Providers>
        </div>
      </body>
    </html>
  );
}
