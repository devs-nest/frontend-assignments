import './collection-item.styles.scss'
import CustomButton from '../CustomButton'
import { connect } from 'react-redux'
import { addCartItem } from '../../redux/cart/cart.actions'

import React from 'react'

const CollectionItem = ({ item, addItem }) => {
  const { imageUrl, name, price } = item
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />

      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
      <CustomButton inverted onClick={() => addItem(item)}>
        Add to cart
      </CustomButton>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addCartItem(item))
})

export default connect(null, mapDispatchToProps)(
  CollectionItem
)
