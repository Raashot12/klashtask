import { MantineProvider } from '@mantine/core';
import React, { ReactElement } from 'react';

const inputStyles = {
  input: {
    height: '3rem',
    fontSize: '1rem',
    borderRadius: 8,
  },
  label: {
    fontSize: 12,
  },
  required: {
    color: 'red',
  },
};

const buttonStyles = {
  root: {
    height: 48,
  },
  label: {
    fontSize: 18,
    fontWeight: 500,
  },
};

const OnboardingThemeProvider = ({ children }: { children: ReactElement }) => {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        black: '#051438',
        colors: {
          brand: [
            '#020217',
            '#060746',
            '#0B0C7D',
            '#0e10a4',
            '#1314d3',
            '#2c2eec',
            '#5b5cf1',
            '#8a8bf5',
            '#b9b9f9',
            '#e8e8fd',
          ],
        },
        primaryColor: 'brand',
        primaryShade: 2,
        defaultRadius: 'md',
        fontFamily: 'General Sans',
        headings: {
          fontFamily: 'General Sans',
          sizes: {
            h2: { fontWeight: 500, fontSize: 24, lineHeight: 1.35 },
            h3: { fontWeight: 500, fontSize: 19.2, lineHeight: 1.25 },
          },
        },
        components: {
          Input: {
            styles: () => ({
              input: inputStyles.input,
              label: inputStyles.label,
            }),
          },
          InputWrapper: {
            styles: () => ({
              label: inputStyles.label,
              required: inputStyles.required,
            }),
          },
          PasswordInput: {
            styles: () => ({
              innerInput: inputStyles.input,
            }),
          },
          Button: {
            styles: () => buttonStyles,
          },
        },
      }}
    >
      {children}
    </MantineProvider>
  );
};

export default OnboardingThemeProvider;
