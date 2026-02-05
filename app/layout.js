import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import Header from "@/components/Header";

export const metadata = {
  title: "Spott",
  description: "Discover and create amazing events",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`bg-linear-to-br from-gray-950 via-zinc-900 to-stone-900 text-white`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* Header */}
          <Header />
          {/* Main Content */}
          <main className="relative min-h-screen container mx-auto pt-40 md:pt-32">
            <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
              <div className="absolute top-0 right-1/2 w-96 h-96 bg-yellow-600/20 blur-3xl" />
              <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-slate-600/20 blur-3xl" />
            </div>
            <div className="relative z-10 min-h-[70vh]">{children}</div>
          </main>
          {/* Footer */}
          <footer className="border-t border-gray-800/50 py-8 px-6 max-w-7xl mx-auto text-center">
            <div className="text-sm text-gray-300">Made by Kasfia Mostafa</div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
