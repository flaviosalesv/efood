import { styled } from 'styled-components'
import { cores } from '../../style'

type Props = {
  maxWidth?: string
}

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.8;
  width: 100%;
`

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`

export const SideBar = styled.aside`
  color: ${cores.rosaClaro};
  background-color: ${cores.rosa};
  z-index: 1;
  width: 320px;
  padding: 32px 8px 0 8px;

  .margin-top {
    margin-top: 24px;
  }

  h3 {
    color: ${cores.rosaClaro};
    margin-bottom: 16px;
    font-size: 18px;
  }

  > p {
    color: ${cores.rosaClaro};
    font-size: 14px;
  }

  .center {
    text-align: center;
  }

  @media (max-width: 768px) {
    width: 260px;
  }
`

export const CartItem = styled.li`
  display: flex;
  position: relative;
  background-color: ${cores.rosaClaro};
  color: ${cores.rosa};
  margin-bottom: 16px;
  padding: 8px;

  & > img {
    margin-right: 8px;
    margin-bottom: 4px;
    width: 80px;
    height: 80px;
    object-fit: cover;
  }

  h4 {
    font-size: 18px;
  }

  p {
    margin: 16px 0 8px 0;
    font-size: 14px;
  }

  div {
    img {
      cursor: pointer;
      position: absolute;
      bottom: 12px;
      right: 8px;
    }
  }
`

export const Qtty = styled.p`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
  margin-bottom: 16px;

  span {
    font-weight: bold;
    color: ${cores.rosaClaro};
  }
`

export const Botao = styled.button`
  width: 100%;
  padding: 4px;
  border: none;
  background-color: ${cores.rosaClaro};
  cursor: pointer;
  margin-bottom: 8px;
  height: 24px;
  font-size: 14px;
  font-weight: bold;
`

export const Conteudo = styled.form`
  display: block;
  margin-bottom: 24px;

  label,
  input {
    color: ${cores.rosaClaro};
    display: block;
  }
`

export const Row = styled.div`
  width: 100%;
  display: flex;
  flex: auto;
  column-gap: 32px;
  margin-top: 8px;
`

export const InputGroup = styled.div<Props>`
  width: ${(props) => (props.maxWidth ? props.maxWidth : '100%')};

  label {
    margin-bottom: 8px;
    font-size: 14px;
    font-weight: bold;
  }

  input {
    background-color: ${cores.rosaClaro};
    border: 2px solid transparent;
    width: 100%;
    padding: 8px;
    color: #4b4b4b;
    font-family: Roboto;
    font-size: 14px;
    font-weight: bold;

    &.error {
      color: red;
      border: 2px solid red;
    }
  }
`
