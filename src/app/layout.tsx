import { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/components/provider";

export const metadata: Metadata = {
  title: "Film Task",
  description: "test project",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body>
        <Providers>
          <main className="container">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
