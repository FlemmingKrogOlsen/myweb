import styled, { keyframes, css } from 'styled-components';
import { IProps } from './types';

const CreateElements = () => {
  let styles: string = '';
  const step: number = 360 / 12;
  const timer: number = -1200;

  for (let i: number = 0; i < 12; i += 1) {
    styles += `
      div:nth-child(${i}) {
        transform: rotate(${step * i}deg);
        animation-delay: ${timer + i * 100}ms;
      }
    `;
  }
  return css`
    ${styles};
  `;
};

const animation = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const Container = styled.div<IProps>`
  color: official;
  display: inline-block;
  position: relative;
  width: 64px;
  height: 64px;
  transform: scale(${({ scale }) => scale});
  transform-origin: top center;
  div {
    transform-origin: 32px 32px;
    animation: ${animation} 1200ms linear infinite;
  }
  div:after {
    content: ' ';
    display: block;
    position: absolute;
    top: 3px;
    left: 29px;
    width: 5px;
    height: 14px;
    border-radius: 2.5px;
    background: ${({ color, theme }) => (color ? color : theme.COLOR.PRIMARY)};
  }
  ${CreateElements()};
`;

export default Container;
