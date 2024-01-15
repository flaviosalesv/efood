import { Container } from './styles'

export function CartEmpty() {
  return (
    <Container>
      <img
        src="/empty-cart.svg"
        width={200}
        height={200}
        alt="Carrinho vazio"
      />
      <div>
        <h1>Nenhum item adicionado ao carrinho</h1>
        <p>Adicione itens ao carrinho e eles aparecerão aqui.</p>
      </div>
    </Container>
  )
}
