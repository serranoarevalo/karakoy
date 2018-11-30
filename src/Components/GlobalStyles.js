import { createGlobalStyle } from "styled-components";
import resetCSS from "reset-css";

const GlobalStyle = createGlobalStyle`
  ${resetCSS};
  body {
    margin: 0;
    padding: 0;
    font-family: "Roboto", -apple-system, BlinkMacSystemFont, "Segoe UI",  "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  * {
    box-sizing:border-box;
  }
`;

export default GlobalStyle;
