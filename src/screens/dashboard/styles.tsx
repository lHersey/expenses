import Text from 'shared/components/text';
import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  flex: 1;
  background-color: ${p => p.theme.SECONDARY_BACKGROUND_COLOR};
`;

export const Title = styled(Text)`
  color: ${p => p.theme.PRIMARY_COLOR};
  font-weight: bold;
`;

export const Block = styled.View`
  padding: 0 10px;
`;
