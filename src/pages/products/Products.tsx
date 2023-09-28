import { useModal } from '@/components/Modal';
import { Product, useProducts } from '@/services/api/hooks/products';
import { Suspense, useMemo, useState } from 'react';
import { ProductDetailModal } from './ProductDetailModal';

const filterProducts = (products: Product[], query?: string) => {
  if (!query) return products;
  return products.filter(product => product.name.toLowerCase().includes(query.toLowerCase()));
};

export const ProductList = () => {
  const [query, setQuery] = useState<string>('');
  const [products] = useProducts();
  const results = useMemo(() => filterProducts(products, query), [products, query]);

  const productDetailModalProps = useModal<{ product: Product }>();

  return (
    <>
      <ProductDetailModal {...productDetailModalProps} />
      <div>
        <h1>Product list</h1>
        <input type="text" placeholder="Search" value={query} onChange={e => setQuery(e.target.value)} />

        <ul>
          {results.map(product => (
            <li key={product.id}>
              <span>{product.name}</span>
              <button onClick={() => productDetailModalProps.open({ product })}>See more</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export const Products = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProductList />
    </Suspense>
  );
};
