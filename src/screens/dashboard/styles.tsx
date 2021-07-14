import Text from 'shared/components/text';
import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${p => p.theme.SECONDARY_BACKGROUND_COLOR};
`;

export const Title = styled(Text)`
  color: ${p => p.theme.PRIMARY_COLOR};
  font-weight: bold;
`;
