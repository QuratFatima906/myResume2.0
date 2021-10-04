import { DefaultSeo, SocialProfileJsonLd } from "next-seo";
import NextHead from "next/head";

import config from "../../config/seo.json";

export const Head = () => {
  return (
    <>
      <DefaultSeo {...config} />
      <SocialProfileJsonLd
        type="Organisation"
        name={config.title}
        url={config.openGraph.url}
        sameAs={config.openGraph.socialMedia.map(v => v.url)}
      />
      <NextHead>
        <html lang="en" prefix="og: http://ogp.me/ns#" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/site.webmanifest" key="site-manifest" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title itemProp="name" lang="en">
          {config.title}
        </title>
        <link rel="canonical" href="https://quratfatima906.github.io/myResume2.0" />
      </NextHead>
    </>
  );
};
