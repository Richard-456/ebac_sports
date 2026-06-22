import Header from './components/Header'
import Produtos from './containers/Produtos'
import { GlobalStyle } from './styles'
import { useGetProdutosQuery } from './store/api'

export type Produto = {
  id: number
  nome: string
  preco: number
  imagem: string
}

function App() {
  // RTK Query substitui o useEffect + fetch + useState de produtos
  const { data: produtos = [], isLoading } = useGetProdutosQuery()

  if (isLoading) return <p>Carregando...</p>

  return (
    <>
      <GlobalStyle />
      <div className="container">
        <Header />
        <Produtos produtos={produtos} />
      </div>
    </>
  )
}

export default App
