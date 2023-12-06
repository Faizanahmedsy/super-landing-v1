import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

export default function HeroSection() {
  return (
    <section className="flex min-h-screen flex-col  justify-around p-24">
      <div>
        <h1 className="text-6xl font-bold text-center tracking-tight">
          Welcome to{" "}
          <Link href="/" className="text-blue-600">
            Smart Donkey
          </Link>
        </h1>
        <p className="text-xl text-center py-2 text-muted-foreground font-mono">
          <br />
          An Educational Platform for Gen-z, Which teaches things that <br />
          actually matters in life.
        </p>
      </div>

      <div className="text-2xl text-center">
        Get started by choosing a course{" "}
        {/* <code className="bg-gray-100 p-2 rounded-md text-lg font-mono">
          here
        </code> */}
        <Button className="mx-auto" href="/courses">
          Courses
        </Button>
      </div>
    </section>
  );
}
