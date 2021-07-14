import React, { FC } from 'react';
import { useTheme } from 'styled-components/native';

import { Container, Gradient, ShadowContainer } from './styles';

type Props = {
  gradient?: boolean;
};

const Card: FC<Props> = props => {
  const { gradient, children } = props;
  const { GRADIENT_BACKGROUND } = useTheme();

  if (gradient)
    return (
      <ShadowContainer>
        <Gradient colors={GRADIENT_BACKGROUND} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
          {children}
        </Gradient>
      </ShadowContainer>
    );

  return (
    <ShadowContainer>
      <Container>{children}</Container>
    </ShadowContainer>
  );
};

export default Card;
