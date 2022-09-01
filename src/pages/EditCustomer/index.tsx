import * as C from './styles';

import AddButton from '../../components/AddButton';

import  { useEffect, useState } from 'react';
import { useApi } from '../../hooks/useApi';
import { useParams } from 'react-router-dom';


const EditCustomer = () => {
    const api = useApi();
    const { id } = useParams()

    const [singleCustomer, setSingleCustomer] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        const customer = async () => {
          const list = await api.getCustomertById(id);
          setLoading(true);
          setName(list.name)
          setEmail(list.email)
          setPhone(list.phone)
          setNote(list.note)
          setLoading(false);
        }
        customer(); 
      }, []);  
    

    const [isCreate, setIsCreate] = useState<boolean>(false);

    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [phone, setPhone] = useState<string>('');
    const [note, setNote] = useState<string>('');
 

    const [error, setError] = useState<boolean>(false);
    
    const onSubmit = async () => {
        try {
            await api.editCustomer(id, name, email, phone, note);
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
                placeholder='Nome do cliente'
                value={name}
                onChange={e => setName(e.target.value)}
            />
        </C.Post> 
        <C.Post>
            <C.Input 
                placeholder='E-mail'
                value={email}
                onChange={e => setEmail(e.target.value)}
                type='email'
            />
        </C.Post>
        <C.Post>
            <C.Input 
                placeholder='Telefone'
                value={phone}
                onChange={e => setPhone(e.target.value)}
            />
        </C.Post>
        <C.Post>
            <C.Desc 
                placeholder='Anotação simples...'
                value={note}
                onChange={e => setNote(e.target.value)}
            />
        </C.Post>
        <C.Add>
            <AddButton 
                children='Editar'
                type='submit'
                onClick={onSubmit}
            />
        </C.Add>
        {isCreate ? (
            <p id='check'>Cliente editado!</p>
        ) : null} 
        {error ? (
            <p id='error'>Um erro ocorreu! </p>
        ) : null} 
    </C.Container>
  )
}

export default EditCustomer;