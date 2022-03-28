import { createSelector } from 'reselect'

const collectionsData = (state) => state.shop

export const selectCollections = createSelector(
  [collectionsData],
  (shop) => shop.collections
)

export const selectSelectionsForPreview = createSelector(
  [selectCollections],
  (collections: object) =>
    Object.keys(collections).map((key) => collections[key])
)

export const selectCollection = (urlParam: string | number) =>
  createSelector(
    [selectCollections],
    (collections: { [x: string]: any }) => collections[urlParam]
  )
