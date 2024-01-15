import { useParams } from 'react-router-dom'

import Header from '../../components/Header'
import ListaComidas from '../../components/ListaComidas'

import { useGetRestauranteQuery } from '../../services/api'

type PerfilParams = {
  id: string
}

function Perfil() {
  const { id } = useParams() as PerfilParams
  const { data: restaurante } = useGetRestauranteQuery(id)

  if (!restaurante) return <h3>Carregando...</h3>

  return (
    <>
      <Header restaurante={restaurante} home="perfil" />
      <ListaComidas cardapio={restaurante.cardapio} />
    </>
  )
}

export default Perfil
