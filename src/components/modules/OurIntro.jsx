import { ourIntroCardContent } from "@/constants";
import Link from "next/link";
import React from "react";

export default function OurIntro() {
  return (
    <section className="container mb-10">
      <div className="text-center font-bold text-3xl p-7">
        <span className="text-blue-500">Who are we ? </span>
        <span>What are our Goals</span>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="">
          <Link
            href="#"
            class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
          >
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
            <p class="font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </Link>
        </div>

        {ourIntroCardContent.map((card, index) => (
          <div className="" key={index}>
            <Link
              href="#"
              class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
            >
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {card.title}
              </h5>
              <p class="font-normal text-gray-700 dark:text-gray-400">
                {card.content}
              </p>
            </Link>
          </div>
        ))}

        {/* <div className="bg-red-500">2</div>
        <div className="bg-red-500">3</div>
        <div className="bg-red-500">4</div>
        <div className="bg-red-500">5</div>
        <div className="bg-red-500">6</div>
        <div className="bg-red-500">7</div>
        <div className="bg-red-500">8</div>
        <div className="bg-red-500">9</div> */}
      </div>
    </section>
  );
}
