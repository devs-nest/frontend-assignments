import { createSelector } from 'reselect'

const collectionsData = (state) => state.shop

export const selectCollections = createSelector(
  [ collectionsData ],
  (shop) => shop.collections
)

export const selectSelectionsForPreview = createSelector(
  [ selectCollections ],
  (collections) =>
    Object.keys(collections).map((key) => collections[key])
)

export const selectCollection = (urlParam) =>
  createSelector(
    [ selectCollections ],
    (collections) => collections[urlParam]
  )
