import { Produto as ProdutoType } from '../../App'
import Produto from '../../components/Produto'
import * as S from './styles'

type Props = {
  produtos: ProdutoType[]
}

// Props simplificadas - favoritar e adicionarAoCarrinho
// agora são gerenciados pelo Redux dentro do componente Produto
const ProdutosComponent = ({ produtos }: Props) => {
  return (
    <S.Produtos>
      {produtos.map((produto) => (
        <Produto key={produto.id} produto={produto} />
      ))}
    </S.Produtos>
  )
}

export default ProdutosComponent
