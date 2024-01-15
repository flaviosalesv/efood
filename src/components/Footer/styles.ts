import styled from 'styled-components'
import { cores } from '../../style'

export const Container = styled.footer`
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${cores.rosaClaro};
  width: 100%;

  img {
    width: 124px;
  }
`

export const RedesSociais = styled.ul`
  display: flex;
  margin-top: 28px;
  margin-bottom: 80px;

  img {
    width: 24px;
  }

  li {
    margin-left: 8px;
  }

  @media (max-width: 769px) {
    margin-bottom: 24px;
    margin-top: 8px;
  }
`

export const Disclaimer = styled.p`
  text-align: center;
  font-size: 10px;
  width: 480px;
`
