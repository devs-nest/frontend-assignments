import React from 'react'
import CustomButton from '../CustomButton'
import './cart-dropdown.styles.scss'
import CartItem from '../CartItem'
import { connect } from 'react-redux'
import { selectCartItems } from '../../redux/cart/cart.selectors'
import { withRouter } from 'react-router-dom'
import { toggleCartHidden } from '../../redux/cart/cart.actions'

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.length ? (
        cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))
      ) : (
        <div>Cart is empty</div>
      )}
    </div>
    {cartItems.length ? (
      <CustomButton
        onClick={() => {
          history.push('/checkout')
          dispatch(toggleCartHidden())
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    ) : null}
  </div>
)

const mapSateToProps = (state) => ({
  cartItems: selectCartItems(state)
})

export default withRouter(
  connect(mapSateToProps)(CartDropdown)
)
