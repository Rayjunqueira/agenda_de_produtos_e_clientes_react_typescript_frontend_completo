import * as C from './styles';

import AddButton from '../../components/AddButton';

import  { useEffect, useState } from 'react';
import { useApi } from '../../hooks/useApi';
import { useParams } from 'react-router-dom';


const EditProduct = () => {
    const api = useApi();
    const { id } = useParams()

    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        const product = async () => {
          setLoading(true);
          const list = await api.getProductById(id);
          setName(list.name);
          setDesc(list.desc);
          setCategories(list.categorias);
          const priceString = list.price.toString();
          setPriceSTR(priceString);
          const stockString = list.stock.toString();
          setStockSTR(stockString);
          setLoading(false);
        } 
        product(); 
      }, []);  
    

    useEffect(() => {
        const category = async () => {
          const categories = await api.getCategories();
          setApiCategories(categories);
        }
        category();
      }, []);  


      const [apiCategories, setApiCategories] = useState<any[]>([]);

      const [isCreate, setIsCreate] = useState<boolean>(false);
  
      const [name, setName] = useState<string>('');
      const [desc, setDesc] = useState<string>('');
      const [categories, setCategories] = useState<string>('');
  
      const [priceSTR, setPriceSTR] = useState<string>('');
      const [stockSTR, setStockSTR] = useState<string>('');
  
      const [error, setError] = useState<boolean>(false);
    
    const onSubmit = async () => {
        try {
            const priceFLT = parseFloat(priceSTR);
            const stockINT = parseInt(stockSTR);            
            await api.editProduct(id, name, desc, priceFLT, stockINT, categories)
            setIsCreate(true);
            setError(false);
        } catch (err) {
            setError(true);
            console.log(err);
        }
    }

  return (
    <C.Container>
        <C.Post>
            <C.Input 
                placeholder='Nome do produto'
                value={name}
                onChange={e => setName(e.target.value)}
            />
        </C.Post> 
        <C.Post>
            <C.Desc 
                placeholder='Descrição simples...'
                value={desc}
                onChange={e => setDesc(e.target.value)}
            />
        </C.Post>
        <C.Post>
            <C.Input 
                placeholder='Preço'
                value={priceSTR}
                onChange={e => setPriceSTR(e.target.value)}
            />
        </C.Post>
        <C.Post>
            <C.Input 
                placeholder='Estoque'
                value={stockSTR}
                onChange={e => setStockSTR(e.target.value)}
            />
        </C.Post>
        <C.Post>
            <C.Categories 
                onChange={(e) => setCategories(e.target.value)}
            >
                <option value="Todas categorias">Escolha uma Categoria</option>
                {apiCategories.map(category => {
                return (
                    <option value={`${category.name}`}>{category.name}</option>
                )
                })}
            </C.Categories>
        </C.Post>
        <C.Add>
            <AddButton 
                children='Editar'
                type='submit'
                onClick={onSubmit}
            />
        </C.Add>
        {isCreate ? (
            <p id='check'>Produto editado!</p>
        ) : null} 
        {error ? (
            <p id='error'>Um erro ocorreu! </p>
        ) : null} 
    </C.Container>
  )
}

export default EditProduct;