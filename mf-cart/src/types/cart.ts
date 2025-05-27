export interface CartItem {
  id: number
  name: string
  price: number
  quantity: number
}

export interface AddToCartEvent extends CustomEvent {
  detail: {
    id: number
    name: string
    price: number
  }
} 