import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import MainLayout from './layout/MainLayout';
import ContactPage from './pages/Contact';
import LoginPage from './pages/Login';
import HomePage from './pages/Home';
import Products from './pages/Products';
import Details from './pages/Details';

function App() {
  return (
    <>
  
      <Routes>
        <Route element={<MainLayout/>} >

        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/products" element={<Products />} />
        <Route path='/Details/:id' element={<Details></Details>}></Route>

        </Route>
      </Routes>
    </>
  );
}

export default App;
