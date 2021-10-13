import styled, { css } from 'src/theme';
import { Text } from 'src/components/common/UI/Text';

const commonStyles = css`
  ${(props) => css`
    background: ${props.theme.colors.blue};
    height: ${props.theme.sizes.medium.headerHeight}px;
    display: flex;
    align-items: center;
  `}
`;

export const ViewStyled = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  height: 100%;
`;

export const HeaderStyled = styled.header`
  ${commonStyles}
`;

export const HeaderViewStyled = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const LogoViewStyled = styled.div``;

export const MenuStyled = styled.div`
  ${(props) => css`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    color: ${props.theme.colors.inverted};
    width: ${props.theme.sizes.medium.menuWidth}px;
  `}
`;

export const MenuItemStyled = styled.div`
  position: relative;
`;

export const MenuItemCounterStyled = styled(Text)`
  ${(props) => css`
    position: absolute;
    top: -${props.theme.uiPoint * 3}px;
    right: -${props.theme.uiPoint * 2}px;
  `}
`;

export const AnchorStyled = styled.a`
  ${(props) => css`
    color: ${props.theme.colors.inverted};
  `}
`;

export const SectionStyled = styled.section`
  flex-grow: 3;
`;

export const FooterStyled = styled.footer`
  ${commonStyles}
`;
