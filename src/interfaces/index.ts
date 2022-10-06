export interface Product {
  id?: number,
  name: string,
  amount: string,
  orderId?: number
}

export interface Order {
  id?: number, 
  userId: number
}

export interface User {
  id?: number, 
  username: string,
  classe: string, 
  level: number, 
  password?: string
}