
import Navbar from "@/components/navbar";
import "./globals.css";
import Background from "@/components/background";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Background />
        <Navbar />
        {children}
      </body>
    </html>
  );
}