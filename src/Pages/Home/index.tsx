import RestaurantesList from '../../components/ListagemRestaurantes'
import Header from '../../components/Header'

import { useGetRestaurantesListQuery } from '../../services/api'

function Home() {
  const { data: restaurantes } = useGetRestaurantesListQuery()

  if (!restaurantes) {
    return <h4>Carregando...</h4>
  }

  return (
    <>
      <Header home="home" />
      <RestaurantesList restaurantes={restaurantes} />
    </>
  )
}

export default Home
