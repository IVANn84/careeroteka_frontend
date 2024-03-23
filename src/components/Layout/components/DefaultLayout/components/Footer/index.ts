import withStyle from 'react-jss';

import Footer from './Footer';

const style = ({ font, background }) => ({
  container: {
    minHeight: 50,
  },
  footer: {
    display: 'flex',
    justifyContent: 'space-between',
    background: background.dark,
    boxShadow: [0, 4, 20, 2, 'rgba(0, 0, 0, 0.1)'],
    borderRadius: 32,
    padding: [0, 30],
    color: font.color.light,
  },
  footerLogo: {
    margin: [35, 0],
  },
  footerTitle: {
    display: 'inline-block',
    fontFamily: 'Montserrat, Inter, sans-serif',
    fontStyle: 'normal',
    fontWeight: font.weight.extraBold,
    fontSize: 24,
    lineHeight: '29px',
  },
  footerLinksDesktop: {
    marginTop: 20,

    '& > *:not(:first-child)': {
      marginLeft: 15,
    },
  },
  footerLinksMobile: {
    display: 'none',
    marginTop: 35,

    '& > *:not(:first-child)': {
      marginLeft: 15,
    },
  },
  footerNavigation: {
    display: 'flex',
    alignItems: 'center',

    '& > span:not(:first-child)': {
      marginLeft: 25,
    },

    '& a': {
      position: 'relative',
      fontWeight: font.weight.normal,
      transition: 'font-weight .2s',

      '&::after': {
        content: '""',
        position: 'absolute',
        opacity: 0,
        left: 1,
        right: 1,
        bottom: -2,
        height: 1,
        width: '100%',
        margin: 'auto',
        background: '#FFF',
        transition: 'opacity .2s',
      },

      '&:hover::after, &:focus-visible::after': {
        opacity: 1,
      },

      '&:active::after': {
        opacity: 1,
        width: '100%',
      },
    },
  },
  copyrightDesktop: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: 10,
    opacity: 0.6,
  },
  copyrightMobile: {
    display: 'none',
    marginTop: 25,
    color: 'rgba(255, 255, 255, .6)',

    '& > *:not(:first-child)': {
      marginTop: 12,
    },
  },

  '@media screen and (max-device-width: 576px)': {
    footer: {
      flexDirection: 'column',
      alignItems: 'flex-start',
      padding: [35, 20],
      color: font.color.light,
    },
    footerLogo: {
      margin: [0, 0, 30, 0],
    },
    footerNavigation: {
      flexDirection: 'column',
      alignItems: 'flex-start',

      '& > span:not(:first-child)': {
        marginLeft: 0,
        marginTop: 25,
      },
    },
    footerLinksDesktop: {
      display: 'none',
    },
    footerLinksMobile: {
      display: 'block',
    },
    copyrightDesktop: {
      display: 'none',
    },
    copyrightMobile: {
      display: 'block',
    },
    copyright: {
      marginTop: 35,
      flexDirection: 'column-reverse',

      '& > span:not(:last-child)': {
        marginTop: 15,
      },
    },
  },
});

export default withStyle(style)(Footer);
