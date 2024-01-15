import styled from 'styled-components'

export const Container = styled.section`
  margin: 56px 0 120px;

  @media (max-width: 768px) {
    margin: 24px 60px;
    padding: 8px;
  }
`

export const Listagem = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 24px;
    justify-content: center;
    align-items: center;
  }
`
