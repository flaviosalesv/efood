import styled from 'styled-components'
import { cores } from '../../style'

export const Card = styled.div`
  max-width: 472px;
  width: 100%;
  position: relative;
  background-color: ${cores.branco};
  border: 1px solid ${cores.rosa};

  img {
    width: 100%;
    height: 100%;
    max-width: 472px;
    max-height: 217px;
    object-fit: cover;
  }

  p {
    color: #e66767;
    font-size: 14px;
    line-height: 22px;
    margin-bottom: 16px;
  }
`

export const NomeRes = styled.h3`
  font-size: 18px;
  font-weight: bold;
`

export const Content = styled.div`
  padding: 8px;
`

export const Infos = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;

  h3 {
    font-size: 18px;
    font-weight: bold;
    margin-right: 8px;
  }

  .center {
    display: flex;
    text-align: center;
  }

  img {
    width: 20px;
    height: 20px;
  }
`

export const Tag = styled.span`
  padding: 6px 8px;
  display: inline-block;
  background-color: ${cores.rosa};
  color: ${cores.branco};
  text-align: center;
  font-size: 12px;
  font-weight: bold;
  margin-right: 8px;
`

export const Tags = styled.div`
  position: absolute;
  top: 16px;
  right: 8px;
  font-size: 12px;
`
