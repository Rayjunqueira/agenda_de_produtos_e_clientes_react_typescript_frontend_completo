import './App.css';

import { Route, Routes } from 'react-router-dom';

import AddCategory from './pages/AddCategory';
import AddCustomer from './pages/AddCustomer';
import AddProduct from './pages/AddProduct';
import CustomerNote from './pages/CustomerNote';
import Customer from './pages/Customers';

import Homepage from './pages/Homepage';
import Product from './pages/Product';
import RemoveCategory from './pages/RemoveCategory';
import SingleProduct from './pages/SingleProduct';
import EditCustomer from './pages/EditCustomer';
import EditProduct from './pages/EditProduct';

function App() { 
  return (
   <Routes>
    <Route path='/' element={<Homepage />} />
    <Route path='/produtos' element={<Product />} />
    <Route path='/clientes' element={<Customer />} />
    <Route path='/addproduto' element={<AddProduct />} />
    <Route path='/addcliente' element={<AddCustomer />} />
    <Route path='/addcategoria' element={<AddCategory />} />
    <Route path='/removecategoria' element={<RemoveCategory />} />
    <Route path='/produto/:id' element={<SingleProduct />} />
    <Route path='/cliente/:id' element={<CustomerNote />} />
    <Route path='/cliente/editar/:id' element={<EditCustomer />} />
    <Route path='/produto/edit/:id' element={<EditProduct />} />
   </Routes>
  );
}

export default App;
