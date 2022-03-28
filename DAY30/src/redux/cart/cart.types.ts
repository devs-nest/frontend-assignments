export const CartTypes = {
  TOGGLE_CART_HIDDEN: 'TOGGLE_CART_HIDDEN',
  ADD_ITEM: 'ADD_ITEM',
  REMOVE_ITEM: 'REMOVE_ITEM',
  CLEAR_ITEM_FROM_CART: 'CLEAR_ITEM_FROM_CART'
}

export type ItemType = {
  id: string
  imageUrl: string
  name: string
  price: number
  quantity?: number
}

export type InitialStateType = {
  hidden: boolean
  cartItems: ItemType[]
}

export type ActionType = { type: string; payload: ItemType }
