import { Header } from "./Header";

interface PageProps {
  children: React.ReactNode;
}

export const Page = ({ children }: PageProps) => (
  <div
    className="bg-indigo-200 min-h-screen text-indigo-900 flex items-center justify-center flex-col p-4"
    style={{
      fontFamily: "Montserrat",
    }}
  >
    <Header />

    <div className="w-full max-w-4xl mx-auto py-6 flex-1">{children}</div>
  </div>
);
