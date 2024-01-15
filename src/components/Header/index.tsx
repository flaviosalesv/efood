import Logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'
import { open } from '../../store/reducers/Cart'

import * as S from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

type Props = {
  home: 'home' | 'perfil'
  restaurante?: RestauranteClass
}

const Header = ({ home, restaurante }: Props) => {
  const { itens } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  if (home === 'home') {
    return (
      <S.Cabecalho>
        <Link to={'/'}>
          <img src={Logo} alt="EFood" />
        </Link>
        <S.Slogan>
          Viva experiências gastronômicas no conforto da sua casa
        </S.Slogan>
      </S.Cabecalho>
    )
  } else {
    if (!restaurante) return <h3>Carregando...</h3>

    return (
      <S.ResCabecalho>
        <S.Container className="container">
          <Link to={'/'}>
            <h4>Restaurantes</h4>
          </Link>
          <Link to={'/'}>
            <img src={Logo} alt="EFood" />
          </Link>
          <p onClick={() => dispatch(open())}>{itens.length} Produtos</p>
        </S.Container>
        <S.Banner style={{ backgroundImage: `url(${restaurante.capa})` }}>
          <S.Blur className="blur">
            <S.Idem className="container">
              <p>{restaurante.tipo}</p>
              <h1>{restaurante.titulo}</h1>
            </S.Idem>
          </S.Blur>
        </S.Banner>
      </S.ResCabecalho>
    )
  }
}

export default Header
