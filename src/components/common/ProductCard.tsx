'use client';

import React from 'react';
import { formatCurrency } from '@/lib/utils';
import { Product } from '@/types';
import Button from './Button';
import Badge from './Badge';
import Card from './Card';

interface ProductCardProps {
  product: Product;
  onAddToCart?: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  const discountedPrice = product.discount
    ? product.price - (product.price * product.discount) / 100
    : product.price;

  return (
    <Card className="flex flex-col">
      <div className="flex items-start justify-between mb-3">
        <div>
          <h3 className="font-bold text-lg">{product.name}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">{product.description}</p>
        </div>
        {product.discount && (
          <Badge variant="danger" className="ml-2 flex-shrink-0">
            -{product.discount}%
          </Badge>
        )}
      </div>

      <div className="flex items-baseline gap-2 mb-3">
        <span className="text-2xl font-bold text-primary">{formatCurrency(discountedPrice)}</span>
        {product.discount && (
          <span className="text-sm text-gray-500 line-through">{formatCurrency(product.price)}</span>
        )}
      </div>

      <p className="text-xs text-gray-600 dark:text-gray-400 mb-4">
        Stock: <span className="font-semibold">{product.stock}</span>
      </p>

      <Button
        variant="primary"
        size="md"
        onClick={onAddToCart}
        disabled={product.stock === 0}
        className="mt-auto"
      >
        Tambah ke Keranjang
      </Button>
    </Card>
  );
};

export default ProductCard;
