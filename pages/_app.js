import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";
import "../styles/index.css";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;

// Layout is not wrapped here because a project could have more than one layout.
// If a same layout is fixed in all the pages, then layout could be wrapped here.
