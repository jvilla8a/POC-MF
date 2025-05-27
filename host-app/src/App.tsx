import { Suspense, lazy } from 'react'
import './App.css'

const Auth = lazy(() => import('mf-auth/Auth'))
const Products = lazy(() => import('mf-products/Products'))
const Cart = lazy(() => import('mf-cart/Cart'))

function App() {
  return (
    <div className="container">
      <header className="header">
        <h1>Micro Frontend POC</h1>
        <div className="cart-wrapper">
          <Suspense fallback="Loading Cart...">
            <Cart />
          </Suspense>
        </div>
      </header>
      
      <main className="main-content">
        <Suspense fallback="Loading Auth...">
          <Auth />
        </Suspense>

        <Suspense fallback="Loading Products...">
          <Products />
        </Suspense>
      </main>
    </div>
  )
}

export default App
