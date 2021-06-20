import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {addProductToCartRequest} from '../store/modules/cart/actions';
import { IProduct } from '../store/modules/cart/types';
import api from '../services/api';

export function Catalog() {
  const dispatch = useDispatch();
  const [catalog, setCatalog] = useState<IProduct[]>([]);

  useEffect(() => {
    async function loadProducts() {
      const { data } = await api.get('products');
      setCatalog(data);
    }
    loadProducts();
  }, []);

  function handleAddProductToCart(product: IProduct) {
    dispatch(addProductToCartRequest(product));
  }

  return (
    <>
      <h1>Catalog</h1>
      <ul>
        {catalog.map(product => (
          <li key={product.id}>
            {product.title} - {product.price}
            <button type="button" onClick={() => handleAddProductToCart(product)}>Comprar</button>
          </li>
        ))}
      </ul>

    </>
  );
}