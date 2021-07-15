import { render } from '@testing-library/react-native';
import React from 'react';
import Providers from 'shared/providers/test-providers';

import TransactionItem from '../index';

describe('<TransactionItem />', () => {
  describe('snapshots', () => {
    it('should match snapshot', () => {
      expect.hasAssertions();
      const rendered = render(
        <Providers>
          <TransactionItem />
        </Providers>,
      ).toJSON();

      expect(rendered).toMatchSnapshot();
    });
  });
});
