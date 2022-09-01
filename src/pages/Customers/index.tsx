import * as C from './styles';

import { useNavigate } from 'react-router-dom';
import Searchbar from '../../components/Searchbar';
import AddButton from '../../components/AddButton';
import Pagination from '../../components/Pagination';
import CustomerCard from '../../components/CustomerCard';
import { useEffect, useState } from 'react';
import { useApi } from '../../hooks/useApi';

type Props = {}

const LIMIT = 8

const Customer = (props: Props) => {
  const navigate = useNavigate();
  const api = useApi();
 
  const [customers, setCustomers] = useState<any[]>([]);
  const [text, setText] = useState<string>('');
  const [offset, setOffset] = useState<number>(0);

  useEffect(() => {
    const customer = async () => {
      const list = await api.getCustomers();
      setCustomers(list);
    }
    customer();
  }, []);  

  const handleAddProduct = () => {
    navigate('/addcliente')
  }

  const lowerSearch = text.toLocaleLowerCase();

  const filteredCustomers = customers.filter(customer => customer
    .name.toLowerCase().includes(lowerSearch)
  );

  const pagCustomers = filteredCustomers.slice(offset, offset+8)

  return (
    <C.Container>
      <C.NavContainer>
        <C.SearchContainer>
          <Searchbar 
            placeholder='Digite nome do cliente'
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </C.SearchContainer>
        <C.Buttons>
            <AddButton 
              children="Adicionar um cliente +"
              onClick={handleAddProduct}
            />
        </C.Buttons>
      </C.NavContainer>
      <C.Products>
        <hr />
        {pagCustomers.map(customer => {
          return (
            <CustomerCard
              id={customer._id}
              name={customer.name}
              phone={customer.phone}
              email={customer.email}
            />
          )
        })}
      </C.Products>
      <C.PaginationAction>
      <Pagination
          limit={LIMIT}
          total={filteredCustomers.length}
          offset={offset}
          setOffset={setOffset}
          />
      </C.PaginationAction>
    </C.Container>
  )
}

export default Customer