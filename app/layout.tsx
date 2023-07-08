import "./globals.css";
import { Poppins } from "next/font/google";

const inter = Poppins({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Meu Kanban",
  description: "Um aplicativo de kanban criado utilizando nextjs",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
