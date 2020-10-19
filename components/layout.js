import styled from "styled-components";
import Header from "./header";
import Footer from "./footer";
import Body from "./body";

const Wrapper = styled.div.attrs({ className: "flex flex-col md:h-screen" })``;

const Layout = ({ children }) => {
  return (
    <Wrapper>
      <Header />
      <Body>
        <main className="sm:mx-2 md:mx-8 my-4 sm:my-12 font-open-sans text-gray-76 sm:text-sm leading-relaxed w-screen">
          {children}
        </main>
      </Body>
      <div className="flex flex-col flex-1 justify-end">
        <Footer />
      </div>
    </Wrapper>
  );
};

export default Layout;
