import styled, { css } from 'src/theme';
import { Text } from 'src/components/common/UI/Text';

export const ViewStyled = styled.div`
  ${(props) => css`
    padding: ${props.theme.uiPoint * 5}px;
  `}
`;

export const DescriptionStyled = styled.div``;

export const TitleStyled = styled(Text)`
  text-transform: uppercase;
  text-align: center;
`;

export const ListStyled = styled.ul`
  ${(props) => css`
    display: grid;
    grid-template-columns: repeat(
      auto-fill,
      minmax(${props.theme.sizes.medium.cardWidthNormal}px, 1fr)
    );
    grid-gap: ${props.theme.uiPoint * 4}px;
    padding: ${props.theme.uiPoint * 3}px 0;

    @media screen and ${props.theme.media.mobile} {
      display: flex;
      flex-direction: column;
      width: 100%;
    }
  `}
`;

export const ItemStyled = styled.li``;
