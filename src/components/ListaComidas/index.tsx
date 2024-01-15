import Comida from '../Comida'
import { Container, Listagem } from './styles'

type Props = {
  cardapio: ComidaClass[]
}

const ListaComidas = ({ cardapio }: Props) => {
  return (
    <Container>
      <div className="container">
        <Listagem>
          {cardapio.map((r) => (
            <li key={r.id}>
              <Comida comida={r} />
            </li>
          ))}
        </Listagem>
      </div>
    </Container>
  )
}
export default ListaComidas
