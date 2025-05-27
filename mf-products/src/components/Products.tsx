import { useState } from 'react'
import './Products.css'

interface Product {
  id: number
  name: string
  price: number
  description: string
}

const initialProducts: Product[] = [
  {
    id: 1,
    name: 'Laptop Pro',
    price: 1299.99,
    description: 'High-performance laptop for professionals',
  },
  {
    id: 2,
    name: 'Smartphone X',
    price: 799.99,
    description: 'Latest smartphone with advanced features',
  },
  {
    id: 3,
    name: 'Wireless Headphones',
    price: 199.99,
    description: 'Premium wireless headphones with noise cancellation',
  },
]

const Products = () => {
  const [products] = useState<Product[]>(initialProducts)

  const handleAddToCart = (product: Product) => {
    const event = new CustomEvent('add-to-cart', {
      detail: {
        id: product.id,
        name: product.name,
        price: product.price,
      },
    })
    window.dispatchEvent(event)
  }

  return (
    <div className="products-container">
      <h2>Our Products</h2>
      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <h3>{product.name}</h3>
            <p className="price">${product.price.toFixed(2)}</p>
            <p className="description">{product.description}</p>
            <button 
              className="add-to-cart-btn"
              onClick={() => handleAddToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Products 