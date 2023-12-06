import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import NavigationBar from "@/components/modules/NavigationBar";
import Footer from "@/components/modules/Footer";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Faizan's Web Template",
  description: "Created with Love by Faizan",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={cn("relative h-full font-sans antialiased", inter.className)}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="relative flex flex-col min-h-screen">
            <div className="main">
              <div className="gradient" />
            </div>

            <div className="app">
              <NavigationBar />
              {children}
              {/* <Footer /> */}
            </div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
