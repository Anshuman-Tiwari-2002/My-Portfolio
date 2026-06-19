import type { GetServerSideProps, NextPage } from "next";
import {
  AboutMe,
  // AboutRotW,
  Achievements,
  // Blog,
  Certifications,
  Contact,
  Designs,
  Education,
  Footer,
  Header,
  Languages,
  // Music,
  // Philantrophy,
  // Photography,
  Projects,
  Resume,
  Skills,
  WorkExperience,
} from "sections";
import { /*getArticles,*/ getmediumArticles, /*getInstagramMedia*/ } from "services";
import type { /*Article,*/ /*InstagramMedia*/mediumArticles } from "types/Sections";

export const getServerSideProps: GetServerSideProps = async () => {
  // const articles = await getArticles();
  const mediumArticles = await getmediumArticles();
  // const instagramMedia = await getInstagramMedia();

  return { props: { /*articles,*/ mediumArticles,/* instagramMedia */} };
};

type Props = {
  // articles: Article[];
  mediumArticles: mediumArticles[];
  // instagramMedia: InstagramMedia[];
};

const Home: NextPage<Props> = ({ /*articles,*/ mediumArticles,/* instagramMedia */}) => (
  <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 pb-16 sm:px-8 md:gap-12 lg:px-10">
    <Header />

    <AboutMe />
    <WorkExperience />

    <Projects />
    <Skills />
    <Achievements />

    <Resume />

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
    <Contact />
    {/* <AboutRotW /> */}
    <Footer />
  </div>
);

export default Home;
