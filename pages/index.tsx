import type { GetServerSideProps, NextPage } from "next";
import {
  AboutMe,
  Achievements,
  Certifications,
  Contact,
  Designs,
  Education,
  FeaturedWork,
  Footer,
  Header,
  Languages,
  Projects,
  Resume,
  Skills,
  WorkExperience,
} from "sections";
import { getmediumArticles } from "services";
import type { mediumArticles } from "types/Sections";

export const getServerSideProps: GetServerSideProps = async () => {
  const mediumArticles = await getmediumArticles();

  return { props: { mediumArticles } };
};

type Props = {
  mediumArticles: mediumArticles[];
};

const Home: NextPage<Props> = ({ mediumArticles }) => (
  <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 pb-8 sm:px-8 md:gap-12 lg:px-10">
    <Header />

    <AboutMe />
    <WorkExperience />

    <FeaturedWork />
    <Projects />
    <Skills />
    <Achievements />

    <div className="grid gap-5 border-t border-border pt-6 lg:grid-cols-[1.1fr_1fr]">
      <Education />
      <div className="grid gap-5">
        <Languages />
        <Certifications />
      </div>
    </div>

    <Designs mediumArticles={mediumArticles} />
    <Resume />
    <Contact />
    <Footer />
  </div>
);

export default Home;
