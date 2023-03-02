import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";

const projects = [
  {
    name: "Pokeapi",
    description:
      "A simple project to consume the pokeapi and show the pokemons, made usign React and Tailwind.",
    image: "/poke.jpg",
    github: "https://github.com/agustinmfran/pokedex",
    link: "https://pokedex-bice-five.vercel.app/",
  },
  {
    name: "Biblo",
    description:
      "Ecommerce project made with Node, Express, JS, Tailwind and MySQL. Books store with user authentication, cart, checkout and admin panel.",
    image: "/biblo.jpg",
    github: "https://github.com/agustinmfran/biblo",
    link: "https://github.com/agustinmfran/biblo",
  },
  {
    name: "MOVIEfinder",
    description:
      "Simple movie finder. Fetchs data and shows popular movies details. Made with NextJS, Tailwind and TMDB API.",
    image: "/movie.jpg",
    github: "https://github.com/agustinmfran/movie-finder",
    link: "https://movie-finder-mu.vercel.app/",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="text-center font-bold text-4xl">
        Projects{" "}
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded" />
      </h1>
      <div className="flex flex-col space-y-28">
        {projects.map((project, index) => {
          return (
            <div key={index}>
              <div className="flex flex-col md:flex-row md:space-x-12">
                <div className="mt-8 md:w-1/2">
                  <Link href={project.link} target="_blank">
                    <Image
                      src={project.image}
                      alt="project-image"
                      width={1000}
                      height={1000}
                      className="rounded-xl shadow-xl hover:opacity-70"
                    />
                  </Link>
                </div>
                <div className="mt-12 md:w-1/2">
                  <h1 className="text-4xl font-bold md-6">{project.name}</h1>
                  <p className="text-xl leading-7 mb-4 text-neutral-600">
                    {project.description}
                  </p>
                  <div className="flex flex-row align-bottom space-x-4">
                    <Link href={project.github} target="_blank">
                      <BsGithub
                        size={30}
                        className="hover:-translate-y-1 transition-transform cursor-pointer"
                      />
                    </Link>
                    <Link href={project.link} target="_blank">
                      <BsArrowUpRightSquare
                        size={30}
                        className="hover:-translate-y-1 transition-transform cursor-pointer"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectsSection;