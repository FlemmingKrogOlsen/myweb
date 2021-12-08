import { Container } from "./pages.styled";

export default function About() {
  return (
    <Container>
      <h1>About</h1>
      <h3>Personal Profile (from CV)</h3>
      <p>
        I am a passionate and creative person who has a solid knowledge in
        programming and design. I have 5 years of experience in making web apps,
        with technologies like React, TypeScript, Gatsby, Styled-Components, C #
        Blazor, HTML and CSS.
        <br />
        I am always passionate about making new and innovative solutions,
        together with a team or on my own.
        <br />
        <br />
        In addition, I have 20 years of experience as a designer in the
        cartonage industry, which has given me a sharper eye in terms of design,
        and a good understanding of communication across industries /
        departments.
      </p>
      <br />
      <div style={{ textAlign: "center" }}>
        <img src="/htmlcssjs.png" alt="htmlcssjs" />
        <br />
        <img src="/logo192.png" alt="htmlcssjs" width="150" />
      </div>
    </Container>
  );
}
