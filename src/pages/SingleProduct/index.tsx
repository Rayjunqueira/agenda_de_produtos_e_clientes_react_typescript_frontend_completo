import * as C from './styles';

import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';

import { useEffect, useState } from 'react';
import { useApi } from '../../hooks/useApi';
import { useNavigate, useParams } from 'react-router-dom';
import SingleProductCard from '../../components/SingleProductCard';
import RemoveButton from '../../components/RemoveButton';

const SingleProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const api = useApi();
  
  useEffect(() => {
    const product = async (id: string | undefined) => {
      const list = await api.getProductById(id);
      setName(list.name);
      setImg(list.img);
      setDesc(list.desc);
      setPrice(list.price);
      setStock(list.stock);
      setCategory(list.categories);
    }
    product(id); 
  }, []);  


  const [name, setName] = useState<string>('');
  const [img, setImg] = useState<string>('');
  const [desc, setDesc] = useState<string>('');
  const [price, setPrice] = useState<number>();
  const [stock, setStock] = useState<number>();
  const [category, setCategory] = useState<string>('');

  const [isDelete, setIsDelete] = useState<boolean>(false);


  const handleDelete = async () => {
    try {
      await api.removeProduct(id);
      setIsDelete(true);
      navigate('/produtos')
    } catch {
      console.log('error');
    }
  }
  
  const handleEditBtn = async () => {
    navigate(`/produto/edit/${id}`)
  }

  return (
    <C.Container>
        <SingleProductCard 
          name={name}
          img={img}
          desc={desc}
          price={price}
          stock={stock}
          category={category}
        />  
        <C.Buttons>
            <C.Edit onClick={handleEditBtn}>Editar produto</C.Edit>
            <RemoveButton 
              children='Deletar Produto'
              onClick={handleDelete}
            />
        </C.Buttons>
        {isDelete ? (
            <p id='check'>Produto deletado!</p>
        ) : null} 
    </C.Container>
  )
}

export default SingleProduct;