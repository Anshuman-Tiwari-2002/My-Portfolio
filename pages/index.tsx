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
  // AboutRotW,
  // Blog,
  // Music,
  // Philantrophy,
  // Photography,
  WorkExperience,
} from "sections";
import { getmediumArticles } from "services";
import type { mediumArticles } from "types/Sections";

export const getServerSideProps: GetServerSideProps = async () => {
  // const articles = await getArticles();
  const mediumArticles = await getmediumArticles();
  // const instagramMedia = await getInstagramMedia();

  return { props: { /*articles,*/ mediumArticles /* instagramMedia */ } };
};

type Props = {
  // articles: Article[];
  mediumArticles: mediumArticles[];
  // instagramMedia: InstagramMedia[];
};

const Home: NextPage<Props> = ({ /*articles,*/ mediumArticles /* instagramMedia */ }) => (
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

    {/* <Blog articles={articles} /> */}
    {/* <Philantrophy /> */}
    {/* <Photography instagramMedia={instagramMedia} /> */}
    {/* <Music /> */}
    <Designs mediumArticles={mediumArticles} />
    <Resume />
    <Contact />
    {/* <AboutRotW /> */}
    <Footer />
  </div>
);

export default Home;
