import "@/styles/globals.scss";

export const metadata = {
  title: "CTNGLOBAL",
  description: "CTNGLOBAL kurumsal web sitesi",
  icons: {
    icon: "/images/ctn_favicon.png",
  },
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
