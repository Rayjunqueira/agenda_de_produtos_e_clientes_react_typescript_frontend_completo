import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CustomerNoteCard from '../../components/CustomerNoteCard';
import { useApi } from '../../hooks/useApi';
import * as C from './styles';

type Props = {}

const CustomerNote = (props: Props) => {
    const api = useApi();
    const { id } = useParams();

    useEffect(() => {
        const product = async (id: string | undefined) => {
          const list = await api.getCustomertById(id)
          setName(list.name);
          setEmail(list.email);
          setPhone(list.phone);
          setNote(list.note);
        }
        product(id); 
      }, []);  
    
      const [name, setName] = useState<string>('');    
      const [email, setEmail] = useState<string>('');    
      const [phone, setPhone] = useState<string>('');    
      const [note, setNote] = useState<string>('');    

  return (
    <C.Container>
        <CustomerNoteCard 
            name={name}
            email={email}
            phone={phone}
            note={note}
        />
    </C.Container>
  )
}

export default CustomerNote;