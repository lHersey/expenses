import React, { ComponentProps, FC } from 'react';

import { TextDefault } from './styles';

type Props = ComponentProps<typeof TextDefault>;

const Text: FC<Props> = props => {
  return <TextDefault {...props} />;
};

export default Text;
