import styled from 'styled-components'

export const Container = styled.section`
  margin: 80px 0 120px;

  @media (max-width: 768px) {
    margin-top: 8px;
    padding: 4px;
  }
`

export const Listagem = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 46px 77px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`
