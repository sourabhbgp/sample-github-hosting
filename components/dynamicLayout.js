import Layout from "./layout";
import { NextSeo } from "next-seo";

const dynamicLayout = ({ title, description }) => {
  return (
    <Layout>
      <NextSeo title={title} description={description} />
    </Layout>
  );
};

export default dynamicLayout;
