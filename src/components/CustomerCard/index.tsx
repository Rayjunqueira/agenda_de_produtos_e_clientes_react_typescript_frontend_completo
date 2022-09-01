import * as C from './styles';

import EditIcon from '@mui/icons-material/Edit';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import { useApi } from '../../hooks/useApi';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

type CustomerCardTypes = {
    name?: string;
    email?: string;
    phone?: string;
    id?: string;
} 

const CustomerCard = ({name, email, phone, id }: CustomerCardTypes) => {
  const api = useApi();
  const navigate = useNavigate();
  
  const [loading, setLoading] = useState<boolean>(false);

  const deleteCustomer = async () => {
    setLoading(true);
    api.removeCustomer(id);
    setLoading(false);
    console.log(loading);
    window.location.reload();
  } 

  const handleNotesCustomer = () => {
    navigate(`/cliente/${id}`)
  }

  const editCustomer = () => {
    navigate(`/cliente/editar/${id}`)
  }

  return (
    <C.CardContainer>
      <C.CardSquad>
        <C.Title>{name}</C.Title>
        <C.Desc>{phone}</C.Desc>
        <C.Desc>{email}</C.Desc>
        <C.Link onClick={handleNotesCustomer}>
          Anotações
        </C.Link>
        <C.Actions>
          <EditIcon id='edit' 
            onClick={editCustomer}
          />
          <RemoveCircleIcon 
            id='remove' 
            onClick={deleteCustomer}
            type='submit'
          />
        </C.Actions>
      </C.CardSquad>
    </C.CardContainer>
  )
}

export default CustomerCard