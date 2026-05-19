import "@/styles/globals.scss";

export const metadata = {
  title: "CTNGLOBAL",
  description: "CTNGLOBAL kurumsal web sitesi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
