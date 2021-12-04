import styled from "styled-components";

export const Header = styled.header`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  background: #dedede;
  color: #123456;
  padding: 10px;
  border-radius: 10px;
  box-shadow: inset 0px 5px 10px rgba(0, 0, 0, 0.65);
  text-align: center;
`;

export const Main = styled.main`
  padding: 1.5rem;
  height: 100%;
`;

export const Content = styled.div`
  font-size: 1.5rem;
  padding: 20px;
  box-shadow: inset 0px 5px 10px rgba(0, 0, 0, 0.65);
  height: calc(100% - 150px);
  background: #dedede;
  color: #123456;
  border-radius: 10px;
  overflow: auto;
  margin-bottom: 1.5rem;
  height: calc(100% - 166px); /* height of header + footer + 3*gap */

  &::-webkit-scrollbar {
    width: 20px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(59, 88, 117, 0.5);
    border-radius: 10px;
    border: 1px solid transparent; // fix scroll graphical glitch (does not happen in plain css)
  }
`;

export const Footer = styled.footer`
  padding: 10px;
  box-shadow: inset 0px 5px 10px rgba(0, 0, 0, 0.65);
  background: #dedede;
  color: #123456;
  text-align: center;
  border-radius: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 59px;
  a {
    color: #123456;
  }
`;
