import { useNavigate } from 'react-router-dom';
import * as C from './styles';

type CustomerNoteCardType = {
    name: String;
    note?: string;
    phone?: String;
    email?: String; 
}

const CustomerNoteCard = ({name, note, phone, email}: CustomerNoteCardType) => {
  const navigate = useNavigate();

  const handleReturnCustomers = () => {
    navigate('/clientes')
  } 

  return (
    <C.Container>
      <C.Desc>{name}</C.Desc>
      <C.Desc>{email}</C.Desc>
      <C.Desc>{phone}</C.Desc>
      <hr />
      <C.Title>{note}</C.Title>

      <C.ButtonReturn onClick={handleReturnCustomers}>
        Retornar
      </C.ButtonReturn>
    </C.Container>
  )
}

export default CustomerNoteCard;