import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "Sistema de Productos",
  description: "CRUD con Next.js, Prisma y MySQL",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="bg-slate-50 text-slate-900">
        <Navbar />
        <main className="max-w-7xl mx-auto p-6">{children}</main>
      </body>
    </html>
  );
}
