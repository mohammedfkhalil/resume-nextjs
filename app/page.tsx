import Education from "@/components/Education";
import Header from "@/components/Header";
import Languages from "@/components/Languages";
import Skills from "@/components/Skills";
import WorkExperience from "@/components/WorkExperience";

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto p-8 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 text-sm">
      <Header />
      <WorkExperience />
      <Skills />
      <Education />
      <Languages />
    </main>
  );
}
