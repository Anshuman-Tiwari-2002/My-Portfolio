import Image from "next/image";
import { Section } from "types/Sections";
import { getSectionHeading } from "utils";

const AboutMe = () => (
  <div id={Section.AboutMe}>
    {getSectionHeading(Section.AboutMe)}

    <div className="grid md:grid-cols-4 gap-12">
      <div className="relative col-span-1 hidden md:block">
        <Image
          fill
          alt="Selfie Boy"
          src="/images/about-me/selfie-boy.svg"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      <div className="col-span-3 max-w-full prose prose-sm md:prose-base prose-neutral dark:prose-invert">
        <p>Hey there!</p>

        <p>
          I&apos;m Anshuman Tiwari, a graduate with a Bachelor&pos;s degree (BE) in Computer Science and Engineering.
          My passion for technology, software development, and problem-solving has been a driving force in my journey.
        </p>

        <p>
          Since childhood, I have been fascinated by computers and their potential to make life easier and more efficient.
          As I&apos;ve grown, this curiosity has only deepened, pushing me to explore new challenges and opportunities in the ever-evolving tech landscape.
        </p>

        <p>
          Whether it&pos;s writing code, troubleshooting software, or experimenting with new gadgets, I find my greatest joy when immersed in technology.
          Beyond textbooks and equations, real-world experiences have shaped my understanding and fueled my passion.
        </p>

        <p>
          Through challenges and triumphs, I have learned the power of creative problem-solving.
          Now, I strive to channel that passion into engineering solutions that make a meaningful impact.
        </p>

        <p>
          I created this website so I could showcase all this and through this process, make it easier for you to
          connect with me. If you like what you see, head over to the <a href="#contact">contact section</a> below and
          send me a text. I would love to hear from you!
        </p>
      </div>
    </div>
  </div>
);

export default AboutMe;
