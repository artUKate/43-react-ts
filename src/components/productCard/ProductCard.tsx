import React from 'react';
import styles from './productCard.module.css';
import MyButton from '../myButton/MyButton';
import { Link } from 'react-router-dom';
import Loader from '../loader/Loader';

interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating?: {
    rate: number,
    count: number
}
}
interface ProductCardProps {
  product: IProduct;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div  className={styles.card}>
      
      <img src={product.image} alt={product.title} className={styles.image} />
      <h3 className={styles.title}>{product.title}</h3>
      <p className={styles.price}>${product.price}</p>
      {/* <p className={styles.description}>{product.description}</p> */}
    <div>
   {/* */}
    <Link to={String(product.id)}><MyButton name='about product'/></Link>
  </div>
  </div>
  );
}

export default ProductCard;