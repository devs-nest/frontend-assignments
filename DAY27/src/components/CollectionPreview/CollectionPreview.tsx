import './preview-component.styles.scss'

import CollectionItem from '../CollectionItem'
import React from 'react'

interface Item {
  id: number
  name: string
  imageUrl: string
  price: number
}

interface IProps {
  title: string
  routeName: string
  items: Item[]
}

const PreviewCollection: React.FC<IProps> = ({
  title,
  items
}) => (
  <div className="collection-preview">
    <h1>{title}</h1>
    <div className="preview">
      {(items as Item[])
        .filter((_, idx) => idx < 4)
        .map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </div>
  </div>
)

export default PreviewCollection
