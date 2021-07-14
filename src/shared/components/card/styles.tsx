import { LinearGradient } from 'expo-linear-gradient';
import Text from 'shared/components/text';
import styled, { css } from 'styled-components/native';

export const ShadowContainer = styled.View`
  overflow: visible;

  /* Shadow iOS */
  shadow-color: ${p => p.theme.BLACK_COLOR};
  shadow-opacity: 0.3px;
  shadow-radius: 4px;
  shadow-offset: 0px 0px;

  /* Shadow Android */
  elevation: 8;
`;

const backgroundStyles = css`
  border-radius: 15px;
  background: ${p => p.theme.MAIN_BACKGROUND_COLOR};
  padding: 15px;
  overflow: hidden;
`;

export const Container = styled.View`
  ${backgroundStyles}
`;

export const Gradient = styled(LinearGradient)`
  ${backgroundStyles}
`;

export const Title = styled(Text)`
  font-weight: bold;
`;
