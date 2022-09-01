import * as C from './styles';

type CardTypes = {
  name: string;
  id: string;
  price: number;
  stock: number;
  category: string;
}

const ProductCard = ({ name, price, stock, category, id }: CardTypes) => {
  return (
    <C.CardContainer>
      <C.CardSquad>
        <C.Title>{name}</C.Title>
        <C.Price>R$ {price}</C.Price>
        <C.Stock>Estoque: {stock}</C.Stock>
        <C.Desc>
          <C.Cat>{category}</C.Cat> 
        </C.Desc>
        <C.Link  href={`/produto/${id}`}>
          ver mais
        </C.Link>
      </C.CardSquad>
    </C.CardContainer>
  )
}

export default ProductCard