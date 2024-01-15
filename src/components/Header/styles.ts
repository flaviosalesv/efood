import styled from 'styled-components'
import { cores } from '../../style'
import Vetor from '../../assets/images/Vector.png'

export const Cabecalho = styled.header`
  background-color: ${cores.rosa};
  background-image: url(${Vetor});
  display: flex;
  flex-direction: column;
  padding: 40px;
  align-items: center;
  width: 100%;

  img {
    margin-bottom: 140px;
  }

  @media (max-width: 768px) {
    padding: 16px;
  }
`

export const ResCabecalho = styled.header`
  background-color: ${cores.rosa};
  background-image: url(${Vetor});
  width: 100%;
`

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 36px 0px 48px 0px;
  align-items: center;

  h4 {
    cursor: pointer;
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;

    @media (max-width: 767px) {
      font-size: 16px;
    }
  }

  p {
    cursor: pointer;
    font-weight: bold;
    font-size: 18px;
  }

  @media (max-width: 768px) {
    padding: 8px;
  }

  img {
    @media (max-width: 767px) {
      width: 72px;
      height: 48px;
    }
  }
`

export const Slogan = styled.h1`
  text-align: center;
  font-size: 36px;
  font-weigth: bold;
  max-width: 540px;
`

export const Banner = styled.div`
  height: 280px;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  width: 100%;
`

export const Blur = styled.div`
  position: absolute;
  max-width: 100%;
  max-height: 100%;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`

export const Idem = styled.div`
  height: 280px;
  padding-top: 24px;
  padding-bottom: 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h1 {
    color: ${cores.branco};
    font-size: 32px;
    font-weight: bold;
  }

  p {
    cursor: pointer;
    color: ${cores.branco};
    font-size: 32px;
    font-weight: 100;
  }

  @media (max-width: 768px) {
    padding: 8px;
  }
`
