import { render } from '@testing-library/react-native';
import React, { ComponentProps, FC } from 'react';
import Providers from 'shared/providers';

import BaseText from '../index';

const Text: FC<ComponentProps<typeof BaseText>> = props => {
  return (
    <Providers>
      <BaseText {...props} />
    </Providers>
  );
};

describe('<Text />', () => {
  describe('snapshots', () => {
    it('should match snapshot', () => {
      expect.hasAssertions();
      const rendered = render(<Text>Hello Text</Text>).toJSON();

      expect(rendered).toMatchSnapshot();
    });
  });

  describe('unit', () => {
    it('should render the text', () => {
      expect.hasAssertions();
      const { queryByText } = render(<Text>Hello Text</Text>);

      expect(queryByText('Hello Text')).toBeTruthy();
    });
  });
});
