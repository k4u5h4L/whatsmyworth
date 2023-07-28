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

          <div className="h-full min-h-[1em] w-px self-stretch bg-gradient-to-tr from-transparent via-neutral-500 to-transparent opacity-20 dark:opacity-100"></div>

          {/* To control the scrolling */}
          <div className="relative z-10 h-screen py-1">
            {/* Render all the children */}
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
