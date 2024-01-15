import styled from 'styled-components'
import { cores } from '../../style'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  div {
    text-align: center;

    h1 {
      color: ${cores.rosaClaro};
    }

    p {
      margin-top: 0.5rem;
      color: ${cores.rosaClaro};
    }
  }
`
