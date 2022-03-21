import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectSelectionsForPreview } from '../../redux/shop/shop.selector'
import './collections-overview.styles.scss'
import CollectionPreview from '../CollectionPreview'

type Item = {
  id: number
  name: string
  imageUrl: string
  price: number
}

type CollectionItem = {
  id: number
  title: string
  routeName: string
  items: Item[]
}

type Props = {
  collections?: CollectionItem[]
}

const CollectionsOverview: React.FC<Props> = ({
  collections
}) => {
  return (
    <div className="collections-overview">
      {collections!.map(
        ({ id, ...otherColletionProps }) => (
          <CollectionPreview
            key={id}
            {...otherColletionProps}
          />
        )
      )}
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  collections: selectSelectionsForPreview
})

export default connect(mapStateToProps, null)(
  CollectionsOverview
)
