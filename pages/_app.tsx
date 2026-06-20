import "animate.css";
import "tippy.js/dist/tippy.css";
import "../styles/globals.css";

import Navigation from "components/Navigation";
import NoSSR from "components/NoSSR";
import ThemeProvider from "contexts/ThemeProvider";
import type { AppProps } from "next/app";
import Head from "next/head";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Anshuman Tiwari | Software Engineer</title>

        <meta
          name="description"
          content="Software Engineer at Sophize Technologies building scalable web applications with Next.js, React, TypeScript, Node.js, Prisma, and PostgreSQL."
        />

        <meta property="og:title" content="Anshuman Tiwari | Software Engineer" />

        <meta
          property="og:description"
          content="Software Engineer at Sophize Technologies building scalable web applications with Next.js, React, TypeScript, Node.js, Prisma, and PostgreSQL."
        />

        <meta property="og:type" content="website" />

        <meta property="og:url" content="https://anshumantiwari.vercel.app" />
        <meta property="og:image" content="https://anshumantiwari.vercel.app/images/og-image.png" />
        <meta property="og:image:secure_url" content="https://anshumantiwari.vercel.app/images/og-image.png" />

        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Anshuman Tiwari | Software Engineer" />

        <meta
          name="twitter:description"
          content="Software Engineer at Sophize Technologies building scalable web applications with Next.js, React, TypeScript, Node.js, Prisma, and PostgreSQL."
        />

        <meta name="twitter:image" content="https://anshumantiwari.vercel.app/images/og-image.png" />
      </Head>

      <ThemeProvider>
        <Component {...pageProps} />

        <NoSSR>
          <Navigation />
        </NoSSR>
      </ThemeProvider>
    </>
  );
};

export default App;
