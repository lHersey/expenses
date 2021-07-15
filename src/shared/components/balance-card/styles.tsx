import Text from 'shared/components/text';
import styled from 'styled-components/native';

import Card from '../card';

export const TextContainer = styled.View`
  margin-top: 10px;
  display: flex;
  align-items: center;
`;

export const Title = styled(Text)`
  color: ${p => p.theme.SECONDARY_TEXT_COLOR};
`;

export const CardContainer = styled(Card)`
  display: flex;
  margin: 10px;
`;

export const AmmountLabel = styled(Text)`
  color: ${p => p.theme.SECONDARY_TEXT_COLOR};
  font-weight: 600;
  font-size: 36px;
`;

export const BalanceTypeContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 20px;
`;
