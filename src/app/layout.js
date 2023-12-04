import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import NavigationBar from "@/components/modules/NavigationBar";
import ShadCnNavBar from "@/components/modules/ShadCnNavBar";
import Footer from "@/components/modules/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Faizan's Web Template",
  description: "Created with Love by Faizan",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NavigationBar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
