"use client";
import React, { useEffect } from "react";
import gsap from "gsap";

import FAQComponent from "./FAQComponent";
import Navbar from "@/components/ui/navbar";

export default function Home() {
  useEffect(() => {
    gsap.fromTo(
      ".side-box",
      { x: -100, opacity: 0.5 },
      { x: 0, opacity: 1, duration: 1 },
    );
    gsap.fromTo(
      ".FAQ",
      { x: 100, opacity: 0.5 },
      { x: 0, opacity: 1, duration: 1 },
    );
  }, []);

  return (
    <main className="mx-10 mt-6 flex">
      <Navbar className="top-2 rounded-full border-2 border-zinc-800" />

      <div className="side-box mt-24">
        <p className="text-8xl font-bold">FAQ</p>
      </div>

      <div className="FAQ ml-10 mt-24 flex-grow">
        <FAQComponent question="What is green energy?">
          <p>
            Green energy is electricity generated by renewable sources, rather
            than those that emit greenhouse gases. This allows energy to be
            produced with little to no environmental impact.{" "}
          </p>
        </FAQComponent>

        <FAQComponent question="What are greenhouse gases?">
          <p>
            Greenhouse gases are some in the atmosphere that can trap heat on
            Earth. This occurs in a process known as the greenhouse effect. This
            heat creates global negative effects such as sea level rise and
            extreme weather.{" "}
          </p>
        </FAQComponent>

        <FAQComponent question="What are some sources of green energy?">
          <ul className="list-inside list-disc">
            <li className="list-item">Solar energy</li>
            <li className="list-item">Wind energy</li>
            <li className="list-item">Hydroelectric power</li>
            <li className="list-item">Bioenergy</li>
            <li className="list-item">Geothermal</li>
          </ul>
        </FAQComponent>

        <FAQComponent question="How does green energy contribute to reducing carbon emissions? ">
          <p>
            Carbon dioxide, a greenhouse gas, is mainly released through the
            burning of fossil fuels. This is why using clean energy is important
            to us – the use of clean energy decreases the need for the use of
            harmful energy sources and replaces it with environmentally friendly
            sources of energy.{" "}
          </p>
        </FAQComponent>

        <FAQComponent question="How does using green energy stimulate jobs and economic growth? ">
          <p>
            Green energy is a sustainable and renewable energy source that can
            create jobs and stimulate economic growth. New energy types have
            consistently grown the job market. Investing in energy transition is
            great for the planet and great for the global economy, as jobs
            created by renewables, energy efficiency, and other investments
            could boost the global economy by nearly{" "}
          </p>
        </FAQComponent>
      </div>
    </main>
  );
}
