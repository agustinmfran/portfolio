import Image from "next/image";
import Head from "next/head";
import { useRouter } from "next/router";
import Link from "next/link";
import es from "../../languages/es";
import en from "../../languages/en";
import HeaderProjects from "@/components/HeaderProjects";
import FooterProjects from "@/components/FooterProjects";

function Biblo() {
  const { locale } = useRouter();
  const lang = locale === "es" ? es.bibloSection : en.bibloSection;
  return (
    <>
      <Head>
        <title>Agustín Franco</title>
      </Head>
      <HeaderProjects />
      <main
        id="project"
        className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl md:h-screen"
      >
        <div className="flex flex-col justify-center items-center pt-40">
          <Link href="https://github.com/agustinmfran/biblo" target="_blank">
            <h1 className="text-center font-bold text-7xl mb-8 border-b-4 border-teal-500">
              Biblo{" "}
            </h1>
          </Link>
          <p className="text-center text-2xl">{lang.description}</p>
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded" />
          <div className="flex justify-center items-center w-full h-full">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/sqQo05JA354"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </main>
      <FooterProjects />
    </>
  );
}

export default Biblo;
