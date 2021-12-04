import styled from "styled-components";

const ButtonLink = styled.a`
  position: absolute;
  top: 97px;
  right: -75px;
  color: ${(props) => props.theme.primary};
  font-size: 0.75rem;
  font-weight: bold;
  background: white;
  border: 1px solid ${(props) => props.theme.primary};
  border-radius: 5px;
  padding: 5px 10px;
  transform-origin: bottom;
  transform: rotate(90deg);
`;

const Container = styled.div`
  display: flex;
  height: 100%;
  position: relative;
`;

const Page = styled.div`
  margin: 20px auto;
  background: white;
  height: 297mm;
  aspect-ratio: 1/1.4142; // aspect ratio of A4 Paper
  box-shadow: 0 0 0.5cm rgba(0, 0, 0, 0.5);
  transform-origin: top;
  transform: scale(0.6);
`;

const IFrame = styled.iframe`
  width: 100%;
  height: 100%;
  overflow: hidden;
  border: none;
  pointer-events: none;
`;

export default function CV() {
  return (
    <>
      <Container>
        <ButtonLink
          href="https://cv.krogolsen.dk/"
          target="_blank"
          rel="noreferrer"
        >
          Click for Print-/Readable Version
        </ButtonLink>
        <Page>
          <IFrame scrolling="no" src="https://cv.krogolsen.dk/"></IFrame>
        </Page>
      </Container>
    </>
  );
}
