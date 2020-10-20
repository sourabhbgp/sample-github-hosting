import Container from "./container";

export default ({ children }) => (
  <div className="py-8  bg-gray-100  flex-1">
    <Container>{children}</Container>
  </div>
);
