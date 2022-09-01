import * as C from './styles';

import AddButton from '../../components/AddButton';
import { useApi } from '../../hooks/useApi';
import { useState } from 'react';

const AddCategory = () => {
    const api = useApi();

    const [name, setName] = useState<string>('');
    const [isCreate, setIsCreate] = useState<boolean>(false);

    const handleCat = () => {
        const category = api.createCategory(name);
        setIsCreate(true);
    }

  return (
    <C.Container>
        <C.Post>
            <C.Input 
                placeholder='Nome da categoria'
                value={name}
                onChange={e => setName(e.target.value)}
            />
        </C.Post>
        <C.Add>
            <AddButton 
                children='Enviar'
                onClick={handleCat}
            />
        </C.Add>
        {isCreate ? (
            <p>Categoria criada!</p>
        ) : null} 
    </C.Container>
  )
}

export default AddCategory