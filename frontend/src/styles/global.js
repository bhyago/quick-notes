import { injectGlobal } from 'vue-styled-components';

export default injectGlobal`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body {
    background: #87C7E1;
    -webkit-font-smoothing: antialiased;
    height: 100vh;
  }

  body, input, button {
    font: 16px Roboto, sans-serif;
  }
  #app {
    max-width: 630px;
    margin: 0 auto;
    padding-left: 20px;
    padding-right: 20px;
  }
  button {
    cursor: pointer;
  }
`;