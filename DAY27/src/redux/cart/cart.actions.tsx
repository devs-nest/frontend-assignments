import { CartTypes, ItemType } from './cart.types'

export const toggleCartHidden = () => ({
  type: CartTypes.TOGGLE_CART_HIDDEN
})

export const addCartItem = (item: ItemType) => ({
  type: CartTypes.ADD_ITEM,
  payload: item
})

export const removeItem = (item: ItemType) => ({
  type: CartTypes.REMOVE_ITEM,
  payload: item
})

export const clearItemFromCart = (item: ItemType) => ({
  type: CartTypes.CLEAR_ITEM_FROM_CART,
  payload: item
})
