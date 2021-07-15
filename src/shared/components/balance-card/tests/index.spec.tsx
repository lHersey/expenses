import { render } from '@testing-library/react-native';
import React from 'react';
import Providers from 'shared/providers/test-providers';

import BalanceCard from '../index';

describe('<BalanceCard />', () => {
  describe('snapshots', () => {
    it('should match snapshot', () => {
      expect.hasAssertions();
      const rendered = render(
        <Providers>
          <BalanceCard />
        </Providers>,
      ).toJSON();

      expect(rendered).toMatchSnapshot();
    });
  });
});
