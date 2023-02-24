import Header from "@/components/Header";
import InfoSection from "@/pages/InfoSection";
import AboutSection from "@/pages/AboutSection";
import ProjectsSection from "@/pages/ProjectsSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl">
        <InfoSection />
        <AboutSection />
        <ProjectsSection />
      </main>
      <Footer />
    </>
  );
}
