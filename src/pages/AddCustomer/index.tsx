import * as C from './styles';

import AddButton from '../../components/AddButton';
import { useApi } from '../../hooks/useApi';
import { useState } from 'react';

type Props = {}

const AddCustomer = (props: Props) => {
    const api = useApi();

    const [name, setName] = useState<string>('');
    const [phone, setPhone] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [note, setNote] = useState<string>('');

    const [isCreate, setIsCreate] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);

    const handleAddCustomer = async () => {
        try {
            await api.postCustomer(name, phone, email, note);
            setIsCreate(true);
            setName('');
            setEmail('');
            setPhone('');
            setNote('');
        } catch {
            setError(true);
        }
    };

  return (
    <C.Container>
        <C.Post>
            <C.Input 
                placeholder='Nome do cliente'
                value={name}
                onChange={e => setName(e.target.value)}
            />
        </C.Post>
        <C.Post>
            <C.Input 
                placeholder='Número de telefone'
                value={phone}
                onChange={e => setPhone(e.target.value)}
            />
        </C.Post>
        <C.Post>
            <C.Input 
                placeholder='E-mail de contato'
                value={email}
                onChange={e => setEmail(e.target.value)}
            />
        </C.Post>
        <C.Post>
            <C.Desc 
                value={note}
                onChange={e => setNote(e.target.value)}            
                placeholder='Anotação simples...'
            />
        </C.Post>
        <C.Add>
            <AddButton 
                children='Enviar'
                onClick={handleAddCustomer}
            />
        </C.Add>

        {isCreate ? (
            <p id='check'>Cliente cadastrado!</p>
        ) : null} 
        {error ? (
            <p id='error'>Nome deve ser preenchido!</p>
        ) : null} 

    </C.Container>
  )
}

export default AddCustomer