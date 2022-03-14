import React from 'react'
import { Route } from 'react-router-dom'
import CollectionsOverview from '../../components/CollectionsOverview'
import Collection from '../collection'

const Shop = ({ match }) => {
  return (
    <div className="shop-page">
      <Route
        exact
        path={`${match.path}`}
        component={CollectionsOverview}
      />
      <Route
        path={`${match.path}/:collectionId`}
        component={Collection}
      />
    </div>
  )
}

export default Shop
