import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import Bounce from "react-reveal/Bounce";
import es from "../languages/es";
import en from "../languages/en";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Next.js",
  "Tailwind",
  "Bootstrap",
  "Node",
  "Express",
  "Redux",
  "MongoDB",
  "MySQL",
  "Git",
  "GitHub",
  "APIs",
];

const AboutSection = () => {
  const { locale } = useRouter();
  const lang = locale === "es" ? es.aboutSection : en.aboutSection;
  return (
    <section id="about">
      <div className="py-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          {lang.title}{" "}
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded" />
        </h1>
        <div className="flex flex-col space-y-10 item-stretch justify-center align-top md:flex-row md:text-left md:p-4 md:space-y-0 md:space-x-10">
          <div className="md:w-1/2">
            <h1 className="text-center font-bold text-2xl mb-6 md:text-left">
              {lang.title2}
            </h1>
            <p>
              {lang.p1} <span className="font-bold">{lang.span1}</span>,
              <span className="font-bold">{lang.span2}</span>, {lang.and}
              <span className="font-bold">{lang.span3}</span>
              {lang.p2}
            </p>
            <br />
            <p>{lang.p3}</p>
            <br />
            <p>{lang.p4}</p>
            <br />
            <p>
              {lang.p5}{" "}
              <span className="font-bold text-black4">{lang.span4}</span>{" "}
              {lang.p6}
            </p>
          </div>
          <div className="md:w-1/2">
            <div>
              <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
                {lang.skills}
              </h1>
              <div className="flex flex-wrap flex-row justify-center md:justify-start">
                {skills.map((skill, index) => {
                  return (
                    <p
                      key={index}
                      className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                    >
                      {skill}
                    </p>
                  );
                })}
              </div>
            </div>
            <div className="flex justify-center items-center">
              <Bounce bottom>
                <Link
                  href="https://coursera.org/share/b3e3bbb596cab83af3ed0a5ae8891fad"
                  target="_blank"
                >
                  <Image
                    src="/meta.png"
                    alt="about"
                    width={180}
                    height={180}
                    className="mt-16 md:block md:relative md:top-16 md:z-0"
                  />
                </Link>
              </Bounce>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
