import React from 'react';
import type { NextPage } from 'next';
import Link from 'next/link';
import { Props } from './interfaces';
import { Container } from 'src/hocs/Container';
import { ROUTES } from 'src/utils/routes';
import { useLocales } from 'src/hooks/useLocales';
import { Text } from 'src/components/common/UI/Text';
import { Color, TextVariantTagName } from 'src/types/enums';
import { usePresenter } from './usePresenter';
import {
  ViewStyled,
  AnchorStyled,
  FooterStyled,
  HeaderStyled,
  MenuStyled,
  SectionStyled,
  LogoViewStyled,
  HeaderViewStyled,
  MenuItemStyled,
  MenuItemCounterStyled,
} from './styled';

export const Layout: NextPage<Props> = ({ children }) => {
  const {
    components: { header, footer },
  } = useLocales();
  const { count } = usePresenter();

  return (
    <ViewStyled>
      <HeaderStyled>
        <Container>
          <HeaderViewStyled>
            <LogoViewStyled>
              <Link href={ROUTES.main}>
                <AnchorStyled>{header.logo}</AnchorStyled>
              </Link>
            </LogoViewStyled>
            <MenuStyled>
              <MenuItemStyled>
                <Link href={ROUTES.main}>
                  <AnchorStyled>{header.menu[0].link}</AnchorStyled>
                </Link>
              </MenuItemStyled>
              <MenuItemStyled>
                <Link href={ROUTES.basket}>
                  <AnchorStyled>{header.menu[1].link}</AnchorStyled>
                </Link>
                {Boolean(count) && (
                  <MenuItemCounterStyled color={Color.inverted}>{count}</MenuItemCounterStyled>
                )}
              </MenuItemStyled>
            </MenuStyled>
          </HeaderViewStyled>
        </Container>
      </HeaderStyled>
      <SectionStyled>
        <Container>{children}</Container>
      </SectionStyled>
      <FooterStyled>
        <Container>
          <Text variant={TextVariantTagName.h3} color={Color.inverted}>
            {footer.info}
          </Text>
        </Container>
      </FooterStyled>
    </ViewStyled>
  );
};
