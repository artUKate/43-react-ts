import React, { useEffect, useState } from 'react';

import styles from './shop.module.css';
import Loader from '../loader/Loader';
import ProductCard from '../productCard/ProductCard';

export interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

export default function Shop() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [productCount, setProductCount] = useState(10);
  const [error, setError] = useState<string | null>(null);

  const fetchProducts = async (count: number) => {
    setLoading(true);
    try {
      const response = await fetch(`https://fakestoreapi.com/products?limit=${count}`);
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchProducts(productCount);
  }, [productCount]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    if (isNaN(value) || value < 1 || value > 20) {
      setError('Please enter a number between 1 and 20');
    } else {
      setError(null);
      setProductCount(value);
    }
  };

  return (
    <div className={styles.shop}>
      <h2>Shop</h2>
      <input
        type="number"
        value={productCount}
        onChange={handleInputChange}
        className={styles.input}
        placeholder="Enter number of products"
      />
      {error && <div className={styles.error}>{error}</div>}
      {loading ? (
        <Loader />
      ) : (
        <div className={styles.grid}>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}