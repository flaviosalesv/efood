import styled from 'styled-components'
import { cores } from '../../style'

export const Card = styled.div`
  width: 320px;
  max-height: 340px;
  padding: 8px;
  background-color: ${cores.rosa};
  color: ${cores.rosaClaro};
`

export const Imagem = styled.img`
  object-fit: cover;
  width: 304px;
  height: 167px;

  @media (max-width: 768px) {
    object-fit: cover;
    max-height: 180px;
    height: 100%;
  }
`

export const Nome = styled.h3`
  margin: 8px 0;
  font-size: 16px;
  color: ${cores.rosaClaro};
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`

export const Desricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 8px;
  color: ${cores.rosaClaro};

  @media (max-width: 768px) {
    font-size: 12px;
  }
`

export const Botao = styled.button`
  width: 100%;
  padding: 4px;
  border: none;
  background-color: ${cores.rosaClaro};
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
`

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 1;
  display: none;
  align-items: center;
  justify-content: center;

  &.visivel {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.73);
  }

  @media (max-width: 900px) {
    padding: 8px;
  }
`

export const ModalContent = styled.div`
  position: relative;
  z-index: 1;
  padding: 32px;
  background-color: ${cores.rosa};

  max-width: 1024px;
  display: flex;

  h4 {
    font-size: 18px;
    color: ${cores.branco};
  }

  p {
    color: ${cores.branco};
    font-size: 14px;
    line-height: 22px;
    text-align: start;
    margin: 16px 0;
  }

  img {
    margin-right: 24px;
    object-fit: cover;
    width: 280px;
    height: 280px;

    @media (max-width: 767px) {
      object-fit: contain;
      align-self: center;
      justify-self: center;
      width: 100%;
      margin: 0;
    }
  }

  ${Botao} {
    width: max-content;
    padding: 4px 6px;

    @media (max-width: 900px) {
      width: 100%;
      padding: 8px;
      border-radius: 8px;
    }
  }

  .close-icon {
    width: 16px;
    height: 16px;
    position: absolute;
    top: 8px;
    right: 8px;
    margin: 0;
    cursor: pointer;

    @media (max-width: 900px) {
      width: 12px;
      height: 12px;
    }
  }

  @media (max-width: 900px) {
    max-width: 360px;
    width: 100%;
    border-radius: 8px;
    flex-direction: column;
    padding: 16px;
  }
`
