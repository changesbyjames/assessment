import { Modal, ModalProps } from '@/components/Modal';
import { Product } from '@/services/api/hooks/products';
import { Currency, useCurrency } from '@/services/currency/CurrencyProvider';
import { FC } from 'react';

interface ProductDetailProps {
  product?: Product;
}

const currencyToSymbol = (currency: Currency) => {
  switch (currency) {
    case Currency.USD:
      return '$';
    case Currency.EUR:
      return '€';
    case Currency.GBP:
      return '£';
  }
};

const ProductDetail: FC<ProductDetailProps> = ({ product }) => {
  if (!product) throw new Error('ProductDetailModal: product is required');
  const { currency } = useCurrency();

  return (
    <div>
      <h1>{product.name}</h1>
      <p>
        {currencyToSymbol(currency)}
        {product.price}
      </p>
    </div>
  );
};

export const ProductDetailModal: FC<ModalProps<{ product: Product }>> = props => {
  return (
    <Modal {...props}>
      <ProductDetail product={props.props?.product} />
    </Modal>
  );
};
