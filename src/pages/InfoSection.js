import React from "react";
import Image from "next/image";
import Link from "next/link";
import { HiArrowDown } from "react-icons/hi";

const InfoSection = () => {
  return (
    <section id="home">
      <div className="flex flex-col text-center items-center justify-center my-10 py-16 sm:py-20 md:flex-row md:space-x-4 md:text-left md:py-24">
        <div className="md:pl-16 md:w-1/2 md:mt-2 md:justify-center lg:pl-36">
          <Image
            className="rounded-full shadow-2xl"
            src="/perfil.jpg"
            alt="me"
            width={300}
            height={300}
          />
        </div>
        <div className="md:mt-2 md:w-3/5 md:pr-12">
          <h1 className="font-bold text-4xl mt-6 md:text-7xl md:mt-0">
            Hi, I&#39;m Agustin
          </h1>
          <p className="text-lg mt-4 mb-6 md:text-2xl">
            I&#39;m a{" "}
            <span className="font-semibold text-teal-600">
              Fullstack web Devolper
            </span>{" "}
            based in Toulouse, France. Working towards creating a better code
            that makes life easier and more meaningful.
          </p>
          <Link
            href="/ProjectsSection"
            className="text-neutral-100 font-semibold px-6 py-3 bg-teal-600 rounded shadow hover:bg-teal-700"
            offset={-100}
            duration={500}
          >
            Projects
          </Link>
        </div>
      </div>
      <div className="flex flex-row justify-center ">
        <Link href="/AboutSection" offset={-100} duration={500}>
          <HiArrowDown size={35} className="animate-bounce" />
        </Link>
      </div>
    </section>
  );
};

export default InfoSection;
