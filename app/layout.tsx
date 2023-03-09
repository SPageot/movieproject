import Navbar from "./components/navigation/Navbar";
import "./globals.css";

export const metadata = {
  title: "Movie Project",
  description: "Library of Movie Trailers",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
