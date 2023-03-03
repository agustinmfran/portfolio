import React from "react";
import Image from "next/image";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Node",
  "Express",
  "Tailwind",
  "Redux",
  "MongoDB",
  "MySQL",
  "Git",
  "GitHub",
  "APIs",
];

const AboutSection = () => {
  return (
    <section id="about">
      <div className="py-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me{" "}
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded" />
        </h1>
        <div className="flex flex-col space-y-10 item-stretch justify-center align-top md:flex-row md:text-left md:p-4 md:space-y-0 md:space-x-10">
          <div className="md:w-1/2">
            <h1 className="text-center font-bold text-2xl mb-6 md:text-left">
              Get to know me
            </h1>
            <p>
              Hi, my name is Agustin and I am a{" "}
              <span className="font-bold">{"highly ambitious"}</span>,
              <span className="font-bold">{" self-motivated"}</span>, and
              <span className="font-bold">{" driven"}</span> Fullstack web
              Developer based in Toulouse, France.
            </p>
            <br />
            <p>
              I graduated from Digital House Coding School, Buenos Aires, in
              2020. I have been working in personal and freelance projects since
              then, using technologies I find interesting such as: Node,
              JavaScript, React & NextJS.
            </p>
            <br />
            <p>
              I have a wide range of hobbies and passions that keep me busy.
              From sports, playing videogames, traveling, to listening to music
              and DJing too. Always seeking new experiences. Love to keep myself
              engaged and learning new things.
            </p>
            <br />
            <p>
              I believe that you should{" "}
              <span className="font-bold text-teal-500">
                never stop growing
              </span>{" "}
              and that&#39;s what I strive to do, I have a passion for
              technology and a desire to always push the limits of what is
              possible. I am excited to see where my career takes me and am
              always open to new opportunities.
            </p>
          </div>
          <div className="md:w-1/2">
            <div>
              <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
                My Skills
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
              <Image
                src="/about.png"
                alt="Agustin"
                width={300}
                height={300}
                className="hidden md:block md:relative md:bottom-4 md:z-0"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
