import { Link, useParams } from 'react-router-dom';
import style from './productPage.module.css';
import { useEffect, useState } from 'react';
import { IProduct } from '../shop/Shop';
import MyButton from '../myButton/MyButton';
import Loader from '../loader/Loader';
import ProductCard from '../productCard/ProductCard';
const initialProduct: IProduct = {
  id: 0,
  title: '',
  price: 0,
  description: '',
  category: '',
  image: ''
};

export default function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState<IProduct>(initialProduct);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(data => {
        setProduct(data);
        setLoading(false);
      });
  }, [id]);

  return (
    <div>
     {loading && <Loader />}
            {ProductCard.length > 0 && (
                
        <>
          <h3>{product.title}</h3>
          <p>{product.description}</p>
          <img src={product.image} width={200} alt={product.title} />
          <div>
            <Link to={'/shop'}><MyButton name='back to shop' /></Link>
          </div>
        </>
      )}
    </div>
  );
}