import styled, { css } from 'src/theme';
import { Button } from 'src/components/common/UI/Button';

export const ViewStyled = styled.div`
  ${(props) => css`
    display: flex;
    padding: ${props.theme.uiPoint * 3}px 0;
  `}
`;

export const ImgViewStyled = styled.div`
  ${(props) => css`
    width: ${props.theme.sizes.medium.imgProductWidth}px;

    @media screen and ${props.theme.media.mobile} {
      max-width: ${props.theme.sizes.medium.imgProductWidth}px;
      width: 100%;
    }
  `}
`;

export const ImgStyled = styled.img`
  width: 100%;
`;

export const InfoStyled = styled.div`
  ${(props) => css`
    padding: ${props.theme.uiPoint * 2}px;
    width: 100%;
  `}
`;

export const DescriptionStyled = styled.div`
  ${(props) => css`
    margin-top: ${props.theme.uiPoint * 2}px;
    max-width: ${props.theme.sizes.medium.infoWidth}px;
    width: 100%;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
  `}
`;

export const SizesStyled = styled.div`
  ${(props) => css`
    display: flex;
    margin: ${props.theme.uiPoint * 2}px 0;
  `}
`;

export const ButtonSizeStyled = styled(Button)`
  ${(props) => css`
    margin-right: ${props.theme.uiPoint}px;
  `}
`;

export const ButtonStyled = styled(Button)`
  ${(props) => css`
    margin-top: ${props.theme.uiPoint * 2}px;
  `}
`;
