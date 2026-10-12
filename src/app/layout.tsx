import { Header } from "@/components/header";
import "./globals.css";


export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={` antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header/>
        <div className="max-w-6-xl">
          {children}
        </div>
      </body>
    </html>
  );
}
