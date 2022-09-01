import * as C from './styles';


import AddButton from '../../components/AddButton';

import { useEffect, useState } from 'react';
import { useApi } from '../../hooks/useApi';


const AddProduct = () => {
    const api = useApi();

    const [apiCategories, setApiCategories] = useState<any[]>([]);

    const [isCreate, setIsCreate] = useState<boolean>(false);

    const [name, setName] = useState<string>('');
    const [desc, setDesc] = useState<string>('');
    const [categories, setCategories] = useState<string>('');

    const [priceSTR, setPriceSTR] = useState<string>('');
    const [stockSTR, setStockSTR] = useState<string>('');

    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);

    useEffect(() => {
        const category = async () => {
          const categories = await api.getCategories();
          setApiCategories(categories);
        }
        category();
      }, []);  
    
    const onSubmit = async () => {
        try {
            setLoading(true);
            const priceFLT = parseFloat(priceSTR);
            const stockINT = parseInt(stockSTR);            
            setLoading(false);
            await api.postProduct(name, priceFLT, desc, stockINT, categories);
            setIsCreate(true);
            setError(false);
            setName('');
            setDesc('');
            setPriceSTR('');
            setStockSTR('');    
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
                children='Enviar'
                type='submit'
                onClick={onSubmit}
            />
        </C.Add>
        {isCreate ? (
            <p id='check'>Produto criado!</p>
        ) : null} 
        {error ? (
            <p id='error'>Estoque e preço deve ser um número e devem ser preenchidos!</p>
        ) : null} 
    </C.Container>
  )
}

export default AddProduct