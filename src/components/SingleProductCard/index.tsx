import * as C from './styles';

type SingleProductCardType = {
    name?: string;
    img?: string,
    desc?: string,
    price?: number,
    stock?: number,
    category?: string,
}

const SingleProductCard = ({name, img, desc, price, stock, category}: SingleProductCardType) => {
  return (
    <C.Container>
      <C.Title>{name}</C.Title>
      <img src={img} alt="" />
      <C.Desc>{desc}</C.Desc>
      <C.Desc>Preço: R$ {price}</C.Desc>
      <C.Desc>Estoque: {stock}</C.Desc>
      <C.Desc>Categoria: {category}</C.Desc>
    </C.Container>
  )
}

export default SingleProductCard