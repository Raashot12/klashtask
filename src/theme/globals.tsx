import { Global } from '@mantine/core';

const GlobalFonts = () => {
  return (
    <Global
      styles={[
        {
          '@font-face': {
            fontFamily: 'General Sans',
            src: `url('/fonts/general-sans/GeneralSans-Regular.woff') format("truetype")`,
            fontStyle: 'normal',
            fontWeight: 400,
            fontDisplay: 'swap',
          },
        },
        {
          '@font-face': {
            fontFamily: 'General Sans',
            src: `url('/fonts/general-sans/GeneralSans-Medium.woff') format("truetype")`,
            fontStyle: 'normal',
            fontWeight: 500,
            fontDisplay: 'swap',
          },
        },
        {
          '@font-face': {
            fontFamily: 'General Sans',
            src: `url('/fonts/general-sans/GeneralSans-Bold.woff') format("truetype")`,
            fontStyle: 'normal',
            fontWeight: 600,
            fontDisplay: 'swap',
          },
        },
      ]}
    />
  );
};

export default GlobalFonts;
