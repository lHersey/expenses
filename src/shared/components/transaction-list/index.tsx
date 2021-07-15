import React, { FC } from 'react';

import TransactionItem from '../transaction-item';
import { Container, Diviver, Header, Title, TransactionFlatList, ViewAll } from './styles';

const TransactionList: FC = () => {
  return (
    <Container>
      <Header>
        <Title>Transactions</Title>
        <ViewAll>View All</ViewAll>
      </Header>
      <TransactionFlatList
        data={new Array(10)}
        keyExtractor={(_, i) => i.toString()}
        renderItem={() => <TransactionItem />}
        ItemSeparatorComponent={Diviver}
      />
    </Container>
  );
};

export default TransactionList;
