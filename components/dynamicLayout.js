import Layout from "./layout";
import { NextSeo } from "next-seo";

const dynamicLayout = ({ title, description, children }) => {
  return (
    <Layout>
      <NextSeo title={title} description={description} />
      {children}
    </Layout>
  );
};

export default dynamicLayout;
