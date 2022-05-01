// import React from 'react'
// import PropTypes from 'prop-types'
import headerStyles from '../styles/Header.module.css'

const Header = props => {
  return (
    <div>
        {/* <h1 className='title'> */}
        <h1 className={headerStyles.title}>
            <span>WebDev</span> News
        </h1>
        
        <p className={headerStyles.description}>
            Keep up to date with the latest web dev news
        </p>

        {/* <style jsx>
            {`
                .title {
                    color: red
                }
            `}
        </style> */}
    </div>
  )
}

// Header.propTypes = {}

export default Header