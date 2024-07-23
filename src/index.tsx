

import ReactDOM from 'react-dom/client';
import './index.css';
import Lesson11 from './lessons/lesson11/Lesson11';
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
import StarWarsGallery from './components/starWarsGallery/StarWarsGallery';
import FormGender from './components/FormGender/FormGender';
import RobotForm from './components/robotForm/RobotForm';
import MyForm from './components/myForm/MyForm';
import HomePage from './components/homePage/HomePage';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import RandomFox from './components/randomFox/RandomFox';
import Shop from './components/shop/Shop';
import ProductPage from './components/product/ProductPage';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
 <>
 <HashRouter>
     <Routes>
     <Route path='/'element={<Layout />} >
     <Route path='/'element={<HomePage />} />
     <Route path='/header' element={<Header/>}/>
     <Route path='/random-fox' element={<RandomFox/>}/>
     {/* <Route path='/'element={<Layout />} > */}
    <Route path='/star-wars-gallery' element={<StarWarsGallery/>}/>
    <Route path='/gender-form' element={<FormGender/>}/>
    <Route path='/robot-form' element={<RobotForm/>}/>
    <Route path='/my-form' element={<MyForm/>}/>
    <Route path='/shop' element={<Shop/>}/>
    <Route path='/shop/:id' element={<ProductPage/>}/>
    <Route path='*' element={<h1>Error 404</h1>} />
    

      </Route>
     </Routes>
  </HashRouter>
   
    </>
);


