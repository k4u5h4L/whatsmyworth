import Sidebar from "~/components/Sidebar";
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
      <body>
        <div className={`flex h-screen w-screen justify-start`}>
          <Sidebar />

          <div className="z-10 h-screen overflow-auto py-1">{children}</div>
        </div>
      </body>
    </html>
  );
}
