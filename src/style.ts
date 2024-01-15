import { createGlobalStyle } from 'styled-components'

export const cores = {
  rosa: '#E66767',
  rosaClaro: '#FFEBD9',
  background: '#FFF8F2',
  branco: '#FFFFFF',
  amarelo: '#FFB930'
}

export const GlobalCss = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
    color: ${cores.rosa};
    text-decoration: none;
  }

  body {
    background-color: ${cores.background};
  }

  .container {
    max-width: 1024px;
    margin: 0 auto;
  }
`
