import React, { FC } from 'react';
import BalanceCard from 'shared/components/balance-card';

import { Container } from './styles';

const Dashboard: FC = () => {
  return (
    <Container>
      <BalanceCard />
    </Container>
  );
};

export default Dashboard;
