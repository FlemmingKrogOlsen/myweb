import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; 
  margin-top: 50px;
`;

export default function error404() {
  return (
    <Container>
      <h1>Error 404</h1>
      <h2>Page not found</h2>
    </Container>
  );
}
