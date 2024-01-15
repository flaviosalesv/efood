import { useState } from 'react'
import { add, open } from '../../store/reducers/Cart'
import * as S from './styles'

import close from '../../assets/images/close.png'
import { useDispatch } from 'react-redux'

type Props = {
  comida: ComidaClass
}

export const formataPreco = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

const Comida = ({ comida }: Props) => {
  const [modalAberta, setModalAberta] = useState(false)
  const dispatch = useDispatch()

  const getDesricao = (descricao: string) => {
    if (descricao.length > 120) {
      return descricao.slice(0, 156) + '...'
    }
  }

  const addToCart = () => {
    dispatch(add(comida))
    dispatch(open())
  }

  return (
    <>
      <S.Card onClick={() => setModalAberta(true)}>
        <S.Imagem src={comida.foto} alt="" />
        <S.Nome>{comida.nome}</S.Nome>
        <S.Desricao>{getDesricao(comida.descricao)}</S.Desricao>
        <S.Botao onClick={() => setModalAberta(true)}>
          Adicionar ao carrinho
        </S.Botao>
      </S.Card>

      <S.Modal className={modalAberta ? 'visivel' : ''}>
        <S.ModalContent>
          <img src={comida.foto} alt="" />
          <div>
            <h4>{comida.nome}</h4>
            <p>
              {comida.descricao} <br />
              <br />
              Serve de {comida.porcao}
            </p>
            <S.Botao onClick={addToCart}>
              Adicionar ao carrinho - {formataPreco(comida.preco)}
            </S.Botao>
          </div>
          <img
            className="close-icon"
            src={close}
            onClick={() => {
              setModalAberta(false)
            }}
            alt=""
          />
        </S.ModalContent>
        <div
          onClick={() => {
            setModalAberta(false)
          }}
          className="overlay"
        ></div>
      </S.Modal>
    </>
  )
}

export default Comida
