import * as C from './styles';
import { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';

import AddButton from '../../components/AddButton';
import Searchbar from '../../components/Searchbar';
import Card from '../../components/ProductCard/index';
import Pagination from '../../components/Pagination';
import { useApi } from '../../hooks/useApi';

const LIMIT = 8;

const Product = () => {
  const navigate = useNavigate();
  const api = useApi();

  const [products, setProducts] = useState<any[]>([]);
  const [categories, setCategories] = useState<any[]>([]);
  const [text, setText] = useState<string>('');
  const [offset, setOffset] = useState<number>(0);

  useEffect(() => {
    const product = async () => {
      const list = await api.getProducts();
      setProducts(list);
    }
    const category = async () => {
      const categories = await api.getCategories();
      setCategories(categories);
    }
    product();
    category();
  }, []);  
    
  
  const handleAddProduct = () => {
    navigate('/addproduto')
  }

  const handleCat = () => {
    navigate('/addcategoria');
  }

  const handleDelete = () => {
    navigate('/removecategoria')
  }

  const lowerSearch = text.toLocaleLowerCase();

  const filteredProducts = products.filter(product => product
    .name.toLowerCase().includes(lowerSearch) || product
    .categories.toLowerCase().includes(lowerSearch)
  );

  const pagProducts = filteredProducts.slice(offset, offset+8)
  
  return (
    <C.Container>
      <C.NavContainer>
       <C.SearchContainer>
          <Searchbar 
            placeholder='Digite nome ou categoria do produto'
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </C.SearchContainer>
        <C.Buttons>
            <AddButton 
              children="Adicionar um produto +"
              onClick={handleAddProduct}
            />
        </C.Buttons>
      </C.NavContainer>
      <C.Products>
        <C.Categories>
          <C.Section onChange={e => setText(e.target.value)}>
            <option value="Todas categorias">Categorias</option>
            {categories.map(category => {
              return (
                <option value={`${category.name}`}>{category.name}</option>
              )
            })}
          </C.Section>
          <C.AddCategory>
            <C.AddButton onClick={handleCat}>Adicionar Categoria</C.AddButton>    
          </C.AddCategory> 
          <C.AddCategory>
            <C.RemoveButton onClick={handleDelete}>Remover uma Categoria</C.RemoveButton>    
          </C.AddCategory> 
        </C.Categories>
        <hr />
        {pagProducts.map(product => {
          return (
            <Card 
              name={product.name}
              price={product.price}
              stock={product.stock}
              category={product.categories}
              id={product._id}
            />
          )
        })}
      </C.Products>
      <C.PaginationAction>
        <Pagination
        limit={LIMIT}
        total={filteredProducts.length}
        offset={offset}
        setOffset={setOffset}
        />
      </C.PaginationAction>
    </C.Container>
  )
}

export default Product