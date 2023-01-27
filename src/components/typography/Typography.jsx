import React from "react";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";

const theme = {
  text: {
    text_fz: 12,
    text_lh: 16,
    sizes: {
      xs: {
        text_fz: "12px",
        text_lh: "16px",
      },
      sm: {
        text_fz: "14px",
        text_sm_lh: "20px",
      },
      md: {
        text_fz: "16px",
        text_lh: "24px",
      },
      lg: {
        text_fz: "18px",
        text_lh: "28px",
      },
    },
    fws: {
      light: {
        fontWeight: 300,
      },
      regular: {
        fontWeight: 400,
      },
      medium: {
        fontWeight: 500,
      },
      bold: {
        fontWeight: 700,
      },
    },
  },
};

const Text = styled.p`
  font-size: ${({ theme }) => theme.text.sizes[size].text_fz};
  line-height: ${({ theme }) => theme.text.sizes[size].text_lh};
  font-weight: ${({ theme }) => theme.text.fws[fw].text_ls};
`;

Text.defaultProps = {
  font: "GT Walsheim Pro",
  letterSpacing: "unset",
  lineHeight: "16px",
  fontSize: "12px",
};

const Typography = () => (
  <div><p>text</p></div>
  // <ThemeProvider theme={theme}>
  //   <Text> size='xs' fw='light'</Text>
  //   <Text> size='sm' fw='regular'</Text>
  //   <Text> size='md' fw='medium'</Text>
  //   <Text> size='lg' fw='bold'</Text>
  // </ThemeProvider>
);

export default Typography;
