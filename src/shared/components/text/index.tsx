import React, { ComponentProps, FC } from 'react';

import { TextDefault } from './styles';

type Props = ComponentProps<typeof TextDefault> & {
  text?: string;
};

const Text: FC<Props> = props => {
  const { text, children } = props;

  return <TextDefault {...props}>{text ?? children}</TextDefault>;
};

export default Text;
