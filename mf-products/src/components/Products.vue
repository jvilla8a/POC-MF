<template>
  <div class="products-container">
    <h2>Products</h2>
    <div class="products-grid">
      <div v-for="product in products" :key="product.id" class="product-card">
        <img :src="product.image" :alt="product.name" />
        <h3>{{ product.name }}</h3>
        <p>{{ product.description }}</p>
        <p class="price">${{ product.price }}</p>
        <button @click="addToCart(product)">Add to Cart</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

interface Product {
  id: number
  name: string
  description: string
  price: number
  image: string
}

export default defineComponent({
  name: 'Products',
  setup() {
    const products = ref<Product[]>([
      {
        id: 1,
        name: 'Product 1',
        description: 'Description for product 1',
        price: 19.99,
        image: 'https://via.placeholder.com/150'
      },
      {
        id: 2,
        name: 'Product 2',
        description: 'Description for product 2',
        price: 29.99,
        image: 'https://via.placeholder.com/150'
      },
      {
        id: 3,
        name: 'Product 3',
        description: 'Description for product 3',
        price: 39.99,
        image: 'https://via.placeholder.com/150'
      }
    ])

    const addToCart = (product: Product) => {
      const event = new CustomEvent('add-to-cart', {
        detail: {
          id: product.id,
          name: product.name,
          price: product.price,
          quantity: 1
        },
        bubbles: true,
        composed: true
      })
      window.dispatchEvent(event)
    }

    return {
      products,
      addToCart
    }
  }
})
</script>

<style scoped>
.products-container {
  padding: 20px;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  padding: 20px;
}

.product-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 15px;
  text-align: center;
  background: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.product-card img {
  width: 100%;
  max-width: 200px;
  height: auto;
  margin-bottom: 10px;
}

.product-card h3 {
  margin: 10px 0;
  color: #333;
}

.product-card p {
  color: #666;
  margin: 5px 0;
}

.price {
  font-size: 1.2em;
  color: #2c3e50;
  font-weight: bold;
}

button {
  background-color: #4CAF50;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #45a049;
}
</style> 