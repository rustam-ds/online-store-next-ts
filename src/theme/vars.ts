export const uiPoint = 5;

const deviceSize = {
  mobile: '991px',
};

export const vars = {
  uiPoint,
  colors: {
    default: '#000',
    secondary: '#474747',
    inverted: '#fff',
    blue: '#5382DE',
    hoverBlue: '#467CE5',
  },
  sizes: {
    medium: {
      headerHeight: 80,
      menuWidth: 160,

      cardWidthNormal: 280,

      imgProductWidth: 340,

      infoWidth: 700,

      basketOrderWidth: 800,
    },
    small: {},
  },
  fonts: {
    h1_size: 22,
    h2_size: 20,
    h3_size: 18,
    p_size: 16,
  },
  transitions: {},
  media: {
    mobile: `(max-width: ${deviceSize.mobile})`,
  },
};
