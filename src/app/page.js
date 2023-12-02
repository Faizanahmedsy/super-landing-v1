import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col  justify-around p-24">
      <h1 className="text-6xl font-bold text-center">
        Welcome to{" "}
        <Link href="https://nextjs.org" className="text-blue-600">
          Next Gen Devs!
        </Link>
      </h1>

      <p className="text-2xl text-center">
        Get started by editing{" "}
        <code className="bg-gray-100 p-2 rounded-md text-lg font-mono">
          pages/index.js
        </code>
      </p>
    </main>
  );
}
