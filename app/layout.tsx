import "./globals.css";

export const metadata = {
  title: "WOW Slime Lab",
  description: "Создай 3 невероятных слайма за 3 дня",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
