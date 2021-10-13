import styled, { css } from 'src/theme';

export const ViewStyled = styled.a``;

export const ImgViewStyled = styled.div``;

export const ImgStyled = styled.img`
  width: 100%;
`;

export const DescriptionStyled = styled.div`
  ${(props) => css`
    margin: ${props.theme.uiPoint * 2}px 0 ${props.theme.uiPoint}px;
  `}
`;

export const PriceStyled = styled.div`
  ${(props) => css`
    margin-bottom: ${props.theme.uiPoint * 2}px;
  `}
`;
