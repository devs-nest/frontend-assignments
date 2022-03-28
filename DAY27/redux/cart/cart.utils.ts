import { ItemType } from './cart.types'

export const addItemToCart = (
  cartItems: ItemType[],
  cartItemToAdd: ItemType
) => {
  const existingCartItem = cartItems.find(
    (cartItem: { id: string }) => cartItem.id === cartItemToAdd.id
  )

  if (existingCartItem) {
    return cartItems.map(
      (cartItem) =>
        cartItem.id === cartItemToAdd.id
          ? {
            ...cartItem,
            quantity: cartItem!.quantity! + 1
          }
          : cartItem
    )
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }]
}

export const removeItemFromCart = (
  cartItems: ItemType[],
  cartItemToRemove: ItemType
) => {
  const existingCartItem = cartItems.find(
    (cartItem: { id: string }) => cartItem.id === cartItemToRemove.id
  )

  if (existingCartItem!.quantity === 1) {
    return cartItems.filter(
      (cartItem) => cartItem.id !== cartItemToRemove.id
    )
  }

  return cartItems.map(
    (cartItem) =>
      cartItem.id === cartItemToRemove.id
        ? { ...cartItem, quantity: cartItem!.quantity! - 1 }
        : cartItem
  )
}
