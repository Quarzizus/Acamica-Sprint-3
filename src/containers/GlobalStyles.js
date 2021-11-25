import styled, { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle` 
* {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  padding: 0;
}
.App {
  max-width: 900px;
  margin: 0 auto;
  height: 100vh;
}

body{
  border-top: 5px solid ${({ theme }) => theme.border};
  background-color: ${({ theme }) => theme.background};
}

`;

export { GlobalStyles };
