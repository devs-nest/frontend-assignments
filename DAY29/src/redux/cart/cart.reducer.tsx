import {
  CartTypes,
  ActionType,
  InitialStateType
} from './cart.types'
import {
  addItemToCart,
  removeItemFromCart
} from './cart.utils'

const INITIAL_STATE: InitialStateType = {
  hidden: true,
  cartItems: []
}

const cartReducer = (
  state = INITIAL_STATE,
  action: ActionType
) => {
  switch (action.type) {
    case CartTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      }

    case CartTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(
          state.cartItems,
          action.payload
        )
      }

    case CartTypes.CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload.id
        )
      }

    case CartTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(
          state.cartItems,
          action.payload
        )
      }

    default:
      return state
  }
}

export default cartReducer
