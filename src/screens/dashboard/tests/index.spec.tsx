import { render } from '@testing-library/react-native';
import React, { ComponentProps, FC } from 'react';
import Providers from 'shared/providers';

import BaseDashboard from '../index';

const Dashboard: FC<ComponentProps<typeof BaseDashboard>> = props => {
  return (
    <Providers>
      <BaseDashboard {...props} />
    </Providers>
  );
};

describe('<Dashboard />', () => {
  describe('snapshots', () => {
    it('should match snapshot', () => {
      expect.hasAssertions();
      const rendered = render(<Dashboard />).toJSON();

      expect(rendered).toMatchSnapshot();
    });
  });

  describe('unit', () => {
    it('should render the text', () => {
      expect.hasAssertions();
      const { queryByText } = render(<Dashboard />);

      expect(queryByText('Hello Dashboard')).toBeTruthy();
    });
  });
});
