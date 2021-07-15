import { Ionicons } from '@expo/vector-icons';
import React, { FC } from 'react';
import { useColorAdjust } from 'shared/hooks';
import { useTheme } from 'styled-components/native';

import { AmmountLabel, CategoryName, Container, DateLabel, IconOverlay, IconWithName, ValuesContainer } from './styles';

const TransactionItem: FC = () => {
  const theme = useTheme();
  const colors = [useColorAdjust(theme.PRIMARY_COLOR, 60), theme.PRIMARY_COLOR];

  return (
    <Container>
      <IconWithName>
        <IconOverlay colors={colors}>
          <Ionicons size={23} color={theme.WHITE} name="fast-food" />
        </IconOverlay>
        <CategoryName text="Food" />
      </IconWithName>
      <ValuesContainer>
        <AmmountLabel text="$21.4" />
        <DateLabel text="Yesterday" />
      </ValuesContainer>
    </Container>
  );
};

export default TransactionItem;
