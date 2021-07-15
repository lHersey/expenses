import React, { FC } from 'react';
import { BalanceType } from 'shared/enum';

import BalanceTypeCard from '../balance-type-card';
import { AmmountLabel, BalanceTypeContainer, CardContainer, TextContainer, Title } from './styles';

const BalanceCard: FC = () => {
  return (
    <CardContainer gradient>
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
    </CardContainer>
  );
};

export default BalanceCard;
