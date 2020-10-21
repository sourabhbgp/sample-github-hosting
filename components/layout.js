import styled from "styled-components";
import Header from "./header";
import Footer from "./footer";
import Body from "./body";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col">
      <Header />
      <Body>{children}</Body>
      <Footer />
    </div>
  );
};

export default Layout;
