import React, { FC } from 'react';
import BalanceCard from 'shared/components/balance-card';
import TransactionList from 'shared/components/transaction-list';

import { Container } from './styles';

const Dashboard: FC = () => {
  return (
    <Container>
      <BalanceCard />
      <TransactionList />
    </Container>
  );
};

export default Dashboard;
