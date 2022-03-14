import './directory.styles.scss'

import MenuItem from '../MenuItem'
import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectDirectorySections } from '../../redux/directory/directory.selector'

type SectionItem = {
  title: string
  imageUrl: string
  id: number
  linkUrl: string
}

type Props = {
  sections?: SectionItem[]
}

const Directory: React.FC<Props> = ({ sections }) => {
  return (
    <div className="directory-wrapper">
      <h2>
        New season <span>SPRING - SUMMER / 2020</span>
      </h2>
      <Link className="button-link" to="/shop">
        Discover the collection
      </Link>
      <div className="directory-menu">
        {sections!.map(({ id, ...optionProps }) => (
          <MenuItem key={id} {...optionProps} />
        ))}
      </div>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})

export default connect(mapStateToProps, null)(Directory)
