import { NavLink, Outlet } from "react-router-dom";
import styled from "styled-components";

import { Container, Menu, MenuSection, Page, MenuItem } from "./App.styled";
import { Main, Header, Content, Footer } from "./layout.styled";
import { LinkedInIcon, GithubIcon, EmailIcon } from "./SVGIcons";

const Dude = styled.img`
position: absolute;
bottom: 0px;
width: 100px;
right: 0px;

`;

export default function App() {
  return (
    <>
            <Dude src="/SP-Studio.png" alt="SP-Studio Figure" title="sp-studio.de" />

    <Container>
      <Menu>
        <MenuSection>
          <NavLink
            style={({ isActive }) => ({
              color: isActive ? "white" : "gray",
            })}
            to="/cv"
          >
            <MenuItem>CV</MenuItem>
          </NavLink>

          <NavLink
            style={({ isActive }) => ({
              color: isActive ? "white" : "gray",
            })}
            to="/"
          >
            <MenuItem>About</MenuItem>
          </NavLink>

          {/* <NavLink
            style={({ isActive }) => ({
              color: isActive ? "white" : "gray",
            })}
            to="/blog"
          >
            <MenuItem>Blog</MenuItem>
          </NavLink> */}
        </MenuSection>
        <MenuSection>
          <a
            href="https://www.linkedin.com/in/flemmingkrogolsen/"
            target="_blank"
            rel="noreferrer"
          >
            <MenuItem>
              <LinkedInIcon />
            </MenuItem>
          </a>
          <a
            href="https://github.com/FlemmingKrogOlsen"
            target="_blank"
            rel="noreferrer"
          >
            <MenuItem>
              <GithubIcon />
            </MenuItem>
          </a>
          <a
            href="mailto:flemming@krogolsen.dk"
            target="_blank"
            rel="noreferrer"
          >
            <MenuItem>
              <EmailIcon />
            </MenuItem>
          </a>
        </MenuSection>
      </Menu>
      <Page>
        <Main>
          <Header>flemming.krogolsen.dk</Header>
          <Content>
            <Outlet />
          </Content>
          <Footer>
            <div>#OPENTOWORK #REMOTE</div>
          </Footer>
        </Main>
      </Page>
    </Container>
    </>
  );
}
