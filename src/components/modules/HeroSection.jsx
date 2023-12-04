import Link from "next/link";
import React from "react";

export default function HeroSection() {
  return (
    <section className="flex min-h-screen flex-col  justify-around p-24">
      <div>
        <h1 className="text-6xl font-bold text-center">
          Welcome to{" "}
          <Link href="/" className="text-blue-600">
            Smart Donkey
          </Link>
        </h1>
        <p className="text-xl text-center py-4 text-gray-500 font-mono ">
          An Educational Platform for Gen-z, We teach things that actually
          matters
        </p>
      </div>

      {/* <div className="text-center">
        <ModeToggle />
      </div> */}
      <p className="text-2xl text-center">
        Get started by choosing a course{" "}
        <code className="bg-gray-100 p-2 rounded-md text-lg font-mono">
          pages/index.js
        </code>
      </p>
    </section>
  );
}
