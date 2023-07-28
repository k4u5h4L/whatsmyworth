import "~/styles/globals.css";

export const metadata = {
  title: "What's my worth",
  description: "Get to know your salary by inputing the below fields",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
