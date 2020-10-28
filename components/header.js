import Container from "./container";

const Header = () => {
  return (
    <header className="bg-blue-600 py-4">
      <Container>
        <div className="flex justify-between  items-center">
          <strong className="text-white  font-medium">NPTEL Guide</strong>
          <a
            hrefLang="en"
            href="https://swayam.gov.in/wso?redirect=/"
            className="py-2 px-4 bg-white rounded font-medium  cursor-pointer  text-base  "
          >
            NPTEL Login Page
          </a>
        </div>
      </Container>
    </header>
  );
};

export default Header;
