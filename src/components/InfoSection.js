import Image from "next/image";
import { useRouter } from "next/router";
import es from "../languages/es";
import en from "../languages/en";
import { Link } from "react-scroll/modules";
import { HiArrowDown } from "react-icons/hi";

const InfoSection = () => {
  const { locale } = useRouter();
  const lang = locale === "es" ? es.infoSection : en.infoSection;
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
            {lang.title}
          </h1>
          <p className="text-lg mt-4 mb-6 md:text-2xl">
            {lang.im}{" "}
            <span className="font-semibold text-teal-600">
              RevOps Lead
            </span>
            {lang.p1}
            <span className="font-semibold text-teal-600">{lang.span}</span>
            {lang.p2}
          </p>
        </div>
      </div>
      <div className="flex flex-row justify-center ">
        <Link
          className="cursor-pointer"
          to="about"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown size={35} className="animate-bounce" />
        </Link>
      </div>
    </section>
  );
};

export default InfoSection;
