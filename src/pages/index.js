import PageLayout from "@/components/PageLayout";
import InfoSection from "@/components/InfoSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import { HiArrowUp } from "react-icons/hi";
import { Link } from "react-scroll/modules";

export default function Home() {
  return (
    <PageLayout>
      <InfoSection id="home" />
      <AboutSection />
      <ProjectsSection />
      <div className="flex flex-row justify-center ">
        <Link
          className="cursor-pointer"
          to="home"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowUp
            size={35}
            className="mt-20 rounded-full border-2 text-neutral-500 border-neutral-500 hover:border-black hover:-translate-y-2 hover:text-black transition-transform cursor-pointer"
          />
        </Link>
      </div>
    </PageLayout>
  );
}
