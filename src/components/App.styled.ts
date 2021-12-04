import styled, { css } from "styled-components";

const conpensate_for_skew = 110;
const menuItemGap = 10;
const menuItemDepth3d = 15;
const menuItemSize = 100;

const primary = "#123456";
const primaryFade = "rgba(59, 88, 117, 1)";

const Container = styled.div`
  max-width: 1000px;
  margin: ${conpensate_for_skew + 5}px auto ${conpensate_for_skew}px auto;
  height: calc(100vh - ${conpensate_for_skew * 2}px);
  display: flex;
  transform-style: preserve-3d;
  transform: skewY(-10deg);
`;
const Menu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 1;
`;

const MenuSection = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: flex-end;
  gap: ${menuItemGap}px;
`;

const ElementDepth3d = css`
  position: relative;
  background: linear-gradient(45deg, ${primary} 0%, ${primaryFade} 100%);
  cursor: pointer;
  &::before {
    content: "";
    position: absolute;
    top: ${menuItemDepth3d * -1}px;
    left: 0;
    width: 100%;
    height: ${menuItemDepth3d}px;
    background: lightgray;
    transform-origin: bottom;
    transform: skewX(45deg);
    pointer-events: none;
  }
  &::after {
    content: "";
    position: absolute;
    top: ${menuItemDepth3d * -1}px;
    left: ${menuItemDepth3d * -1}px;
    height: 100%;
    width: ${menuItemDepth3d}px;
    background: gray;
    transform-origin: left;
    transform: skewY(45deg);
    pointer-events: none;
  }
`;

const MenuItem = styled.div`
  width: ${menuItemSize}px;
  aspect-ratio: 1/1;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.25s ease-in-out;
  ${ElementDepth3d};
  &:hover > svg {
    fill: white;
    filter: drop-shadow(0px 0px 5px white);
  }
  &:hover {
    transform: translateX(-10px);
  }
`;

const Page = styled.div`
  flex: 1;
  margin-left: ${menuItemGap}px;
  ${ElementDepth3d};
`;

export { Container, Menu, MenuSection, Page, MenuItem };
