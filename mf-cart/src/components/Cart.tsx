import { useState, useEffect } from 'react'
import type { CartItem, AddToCartEvent } from '../types/cart'
import './Cart.css'

const Cart = () => {
  const [items, setItems] = useState<CartItem[]>([])
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleAddToCart = (event: Event) => {
      const { detail } = event as AddToCartEvent
      setItems((currentItems) => {
        const existingItem = currentItems.find((item) => item.id === detail.id)
        if (existingItem) {
          return currentItems.map((item) =>
            item.id === detail.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        }
        return [...currentItems, { ...detail, quantity: 1 }]
      })
      setIsOpen(true)
    }

    window.addEventListener('add-to-cart', handleAddToCart)
    return () => window.removeEventListener('add-to-cart', handleAddToCart)
  }, [])

  const removeItem = (id: number) => {
    setItems((currentItems) => currentItems.filter((item) => item.id !== id))
  }

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return
    setItems((currentItems) =>
      currentItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    )
  }

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div className="cart-container">
      <button
        className="cart-toggle"
        onClick={() => setIsOpen(!isOpen)}
      >
        🛒 Cart ({items.reduce((sum, item) => sum + item.quantity, 0)})
      </button>

      {isOpen && (
        <div className="cart-content">
          <h2>Shopping Cart</h2>
          {items.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            <>
              <div className="cart-items">
                {items.map((item) => (
                  <div key={item.id} className="cart-item">
                    <div className="item-info">
                      <h3>{item.name}</h3>
                      <p>${item.price.toFixed(2)}</p>
                    </div>
                    <div className="item-controls">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        +
                      </button>
                      <button
                        className="remove-btn"
                        onClick={() => removeItem(item.id)}
                      >
                        ×
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="cart-total">
                <h3>Total: ${total.toFixed(2)}</h3>
                <button className="checkout-btn">Checkout</button>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  )
}

export default Cart 