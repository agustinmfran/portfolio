import { Link } from "react-scroll/modules";
import { useRouter } from "next/router";
import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineMail,
  AiOutlineCloudDownload,
} from "react-icons/ai";

const FooterProjects = () => {
  const { locale } = useRouter();
  const lang =
    locale === "es"
      ? "https://drive.google.com/file/d/1Q0354fGsNVmq77Dsy9m8eVjIWmtlXaJP/view?usp=sharing"
      : "https://drive.google.com/file/d/1Nbhd1lMSN4jmChmtnRvev9iJdef0BU-M/view?usp=sharing";
  return (
    <footer className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl ">
      <hr className="w-full h-0.5 mx-auto mt-8 bg-neutral-200 border-0"></hr>
      <div className="mx-auto  p-4 flex flex-col text-center text-neutral-900 md:flex-row md:justify-between">
        <div className="flex flex-row items-center justify-center space-x-1 text-neutral-500 ">
          <Link
            to="project"
            className="hover:underline hover:text-black cursor-pointer"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            © 2023 Agustín Franco
          </Link>
        </div>
        <div className="flex flex-row items-center justify-center space-x-2 mb-1">
          <a
            href="https://github.com/agustinmfran"
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineGithub
              className="hover:-translate-y-2 hover:text-black transition-transform cursor-pointer text-neutral-500 "
              size={30}
            />
          </a>

          <a
            href="https://www.linkedin.com/in/agustinmfran/"
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineLinkedin
              className="hover:-translate-y-2 hover:text-black transition-transform cursor-pointer text-neutral-500 "
              size={30}
            />
          </a>

          <a
            href="mailto:agustinmfran@gmail.com"
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineMail
              className="hover:-translate-y-2 hover:text-black transition-transform cursor-pointer text-neutral-500"
              size={30}
            />
          </a>

          <a
            href={lang}
            download="Agustin Franco CV.pdf"
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineCloudDownload
              className="hover:-translate-y-2 hover:text-black transition-transform cursor-pointer text-neutral-500"
              size={30}
            />
          </a>
        </div>
      </div>
    </footer>
  );
};
export default FooterProjects;
