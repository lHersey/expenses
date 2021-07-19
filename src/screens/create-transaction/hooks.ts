import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import Transaction from 'shared/models/transaction';
import ToastService from 'shared/services/toast';
import { transactionAdded } from 'shared/store/reducers/transaction/reducer';
import shortid from 'shortid';
import * as yup from 'yup';

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

export function useAddTransactionHandler(payload: TransactionPayload) {
  const dispatch = useDispatch();
  const { date, ammount, notes, category } = payload;

  return useCallback(async () => {
    try {
      await schema.validate({ date, ammount, notes, category });
      dispatch(transactionAdded(new Transaction(shortid.generate(), date, ammount, notes, category!)));

      ToastService.showSuccess('Transaction saved');
    } catch (err) {
      ToastService.showError('Please, check the fields');
    }
  }, [ammount, category, date, dispatch, notes]);
}
