import React, { FC, useState } from 'react';
import CategoryPickerItem from 'shared/components/category-picker-item';
import CurrencyInput from 'shared/components/currency-input';
import DatePickerItem from 'shared/components/date-picker-item';
import NotePickerItem from 'shared/components/note-picker-item';

import { useAddTransactionHandler } from './hooks';
import { ButtonCreate, ButtonText, Container, Pressable, Title } from './styles';

const CreateTransaction: FC = () => {
  const [ammount, setAmount] = useState(0);
  const [date, setDate] = useState(new Date().toISOString());
  const [category, setCategory] = useState<string>();
  const [notes, setNotes] = useState<string>('');

  const handleCreateTransaction = useAddTransactionHandler({ ammount, date, category, notes });

  return (
    <Container>
      <Title>Create Transaction</Title>
      <CurrencyInput onChangeValue={setAmount} value={ammount} />
      <NotePickerItem value={notes} onChange={setNotes} />
      <CategoryPickerItem value={category} onAccept={setCategory} />
      <DatePickerItem value={date} onAccept={setDate} />
      <Pressable onPress={handleCreateTransaction}>
        <ButtonCreate gradient>
          <ButtonText>Create</ButtonText>
        </ButtonCreate>
      </Pressable>
    </Container>
  );
};

export default CreateTransaction;
