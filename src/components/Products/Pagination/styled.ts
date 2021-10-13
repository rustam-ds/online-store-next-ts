import styled, { css } from 'src/theme';
import { Button } from 'src/components/common/UI/Button';

export const ViewStyled = styled.div``;

export const ButtonStyled = styled(Button)`
  ${(props) => css`
    margin-right: ${props.theme.uiPoint * 2}px;
  `}
`;
