import { useEffect, useRef, useState } from 'react'
import * as Vue from 'vue'

const ProductsWrapper = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const vueAppRef = useRef<any>(null)
  const [Products, setProducts] = useState<any>(null)

  useEffect(() => {
    // Load the Products component
    import('mf-products/Products').then((module) => {
      setProducts(module.default)
    })
  }, [])

  useEffect(() => {
    if (containerRef.current && !vueAppRef.current && Products) {
      const app = Vue.createApp(Products)
      app.mount(containerRef.current)
      vueAppRef.current = app
    }

    return () => {
      if (vueAppRef.current) {
        vueAppRef.current.unmount()
      }
    }
  }, [Products])

  return <div ref={containerRef} />
}

export default ProductsWrapper 