import { Link } from 'react-router-dom'

import * as S from './styles'

import star from '../../assets/images/estrela.svg'

type Props = {
  titulo: string
  avaliacao: number
  destacado: boolean
  tipo: string
  descricao: string
  id: number
  capa: string
}

const Restaurante = ({
  titulo,
  id,
  capa,
  avaliacao,
  tipo,
  destacado,
  descricao
}: Props) => (
  <S.Card>
    <Link to={`/restaurantes/${id}`}>
      <img src={capa} alt={titulo} />
    </Link>
    <S.Tags>
      {destacado && <S.Tag>Destaque da semana</S.Tag>}
      <S.Tag>{tipo}</S.Tag>
    </S.Tags>
    <S.Content>
      <S.Infos className="sobre">
        <h3>{titulo}</h3>
        <div className="center">
          <h3>{avaliacao}</h3>
          <img src={star} alt="" />
        </div>
      </S.Infos>

      <p>{descricao}</p>

      <Link to={`/restaurantes/${id}`}>
        <S.Tag as="a" href="">
          Saiba mais
        </S.Tag>
      </Link>
    </S.Content>
  </S.Card>
)

export default Restaurante
