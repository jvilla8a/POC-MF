import { lazy } from 'react'
import './App.css'

const Auth = lazy(() => import('mf-auth/Auth'))
import ProductsWrapper from './components/ProductsWrapper'
const Cart = lazy(() => import('mf-cart/Cart'))

function App() {
  return (
    <div className="app-container">
      <header>
        <Auth />
      </header>
      <main>
        <ProductsWrapper />
      </main>
      <aside>
        <Cart />
      </aside>
    </div>
  )
}

export default App
