import * as C from './styles';

import { useEffect, useState } from 'react';
import RemoveButton from '../../components/RemoveButton';
import { useApi } from '../../hooks/useApi';

const RemoveCategory = () => {
    const api = useApi();

    useEffect(() => {
        const category = async () => {
          const categories = await api.getCategories();
          setApiCategories(categories);
        }
        category();
      }, []);  

    const [apiCategories, setApiCategories] = useState<any[]>([]);
    const [categories, setCategories] = useState<string>('');
    const [isRemoved, setIsremoved] = useState<boolean>(false);

      const handleDelete = async () => {
        try {
          await api.removeCategory(categories);
          setIsremoved(true);
        } catch {
          console.log('error')
        }
      }

  return (
    <C.Container>
      <C.Post>
      <C.Categories 
            onChange={(e) => setCategories(e.target.value)}
        >
            {apiCategories.map(category => {
               return (
                  <option value={`${category._id}`}>{category.name}</option>
               )
            })}
        </C.Categories>
       </C.Post>
       <C.Add>
        <RemoveButton 
            children='Deletar'
            onClick={handleDelete}
        />
       </C.Add>
       {isRemoved ? (
            <p id='check'>Categoria removida !</p>
        ) : null} 
    </C.Container>
  )
}

export default RemoveCategory;