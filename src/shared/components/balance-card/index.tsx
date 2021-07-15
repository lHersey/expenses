import React, { FC } from 'react';
import { BalanceType } from 'shared/enum';

import BalanceTypeCard from '../balance-type-card';
import Card from '../card';
import { AmmountLabel, BalanceTypeContainer, Container, TextContainer, Title } from './styles';

const BalanceCard: FC = () => {
  return (
    <Container>
      <Card gradient>
        <TextContainer>
          <Title>Total Balance</Title>
        </TextContainer>
        <TextContainer>
          <AmmountLabel>$ 4800.00</AmmountLabel>
        </TextContainer>
        <BalanceTypeContainer>
          <BalanceTypeCard type={BalanceType.INCOME} ammount={4309} />
          <BalanceTypeCard type={BalanceType.EXPENSE} ammount={400} />
        </BalanceTypeContainer>
      </Card>
    </Container>
  );
};

export default BalanceCard;
