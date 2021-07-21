import { useNavigation } from '@react-navigation/core';
import React, { FC, useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import CategoryPickerItem from 'shared/components/category-picker-item';
import CurrencyInput from 'shared/components/currency-input';
import DatePickerItem from 'shared/components/date-picker-item';
import NotePickerItem from 'shared/components/note-picker-item';
import { Screens } from 'shared/constants/screens';
import Transaction from 'shared/models/transaction';
import ToastService from 'shared/services/toast';
import { transactionAdded } from 'shared/store/reducers/transaction/reducer';
import shortid from 'shortid';
import * as yup from 'yup';

import { ButtonCreate, ButtonText, Container, Pressable, Title } from './styles';

const CreateTransaction: FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigation();
  const [ammount, setAmount] = useState(0);
  const [date, setDate] = useState(new Date().toISOString());
  const [category, setCategory] = useState<string>();
  const [notes, setNotes] = useState<string>('');

  const handleCreateTransaction = useCallback(async () => {
    try {
      await schema.validate({ date, ammount, notes, category });
      dispatch(transactionAdded(new Transaction(shortid.generate(), date, ammount, notes, category!)));

      setAmount(0);
      setDate(new Date().toISOString());
      setCategory(undefined);
      setNotes('');

      navigate.navigate(Screens.DASHBOARD_TAB);

      ToastService.showSuccess('Transaction saved');
    } catch (err) {
      ToastService.showError('Please, check the fields');
    }
  }, [ammount, category, date, dispatch, navigate, notes]);

  return (
    <Container>
      <Title>New Transaction</Title>
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

const schema = yup.object().shape({
  ammount: yup.number().positive().required(),
  date: yup.date().required(),
  category: yup.string().required(),
  notes: yup.string().required().max(128),
});

type TransactionPayload = {
  ammount: number;
  date: string;
  category?: string;
  notes: string;
};

export default CreateTransaction;
