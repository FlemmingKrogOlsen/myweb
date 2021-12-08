import { FC, ReactElement } from 'react';
import { IProps } from './types';
import Container from './styled';

const Items: any = () =>
  Array.from(
    { length: 12 },
    (_, index: number): ReactElement => <div key={index} />
  );

const Spinner: FC<IProps> = ({ color, scale }): ReactElement => (
  <Container color={color ? color : undefined} scale={scale ? scale : 1}>
    <Items />
  </Container>
);

export default Spinner;
