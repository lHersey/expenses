import React, { FC } from 'react';
import { IoniconsName } from 'shared/types/icons';
import { useTheme } from 'styled-components/native';

import { Icon, Label, LabelsContainer, Modifiers, Pressable, Subtitle } from './styles';

type Props = Modifiers & {
  text: string;
  subtitle?: string;
  icon?: IoniconsName;
};

const Button: FC<Props> = props => {
  const { text, icon, subtitle, ...modifiers } = props;
  const theme = useTheme();

  return (
    <Pressable {...modifiers}>
      <LabelsContainer>
        {subtitle && <Subtitle>{subtitle}</Subtitle>}
        <Label {...modifiers}>{text}</Label>
      </LabelsContainer>
      {icon && <Icon name={icon} color={theme.WHITE} size={25} />}
    </Pressable>
  );
};

export default Button;
