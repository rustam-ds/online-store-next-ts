import styled, { css } from 'src/theme';

export const ViewStyled = styled.div`
  ${(props) => css`
    padding: ${props.theme.uiPoint * 5}px 0;
  `}
`;

export const ListStyled = styled.ul`
  ${(props) => css`
    margin-top: ${props.theme.uiPoint * 2}px;
  `}
`;

export const ItemStyled = styled.li`
  ${(props) => css`
    border: 1px solid ${props.theme.colors.blue};
    padding: ${props.theme.uiPoint * 3}px;
    border-radius: ${props.theme.uiPoint}px;
    width: ${props.theme.sizes.medium.basketOrderWidth}px;
    margin-bottom: ${props.theme.uiPoint * 4}px;
    margin-right: ${props.theme.uiPoint * 4}px;

    &:last-child {
      margin-bottom: 0;
    }

    @media screen and ${props.theme.media.mobile} {
      width: 100%;
    }
  `}
`;

export const TextViewStyled = styled.div`
  ${(props) => css`
    margin-bottom: ${props.theme.uiPoint * 2}px;

    &:last-child {
      margin-bottom: 0;
    }
  `}
`;

export const ButtonViewStyled = styled.div`
  ${(props) => css`
    margin: ${props.theme.uiPoint * 3}px 0;
  `}
`;
