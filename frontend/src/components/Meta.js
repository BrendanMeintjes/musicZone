import React from 'react'
import { Helmet } from 'react-helmet'

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keyword" content={keywords} />
    </Helmet>
  )
}

Meta.defaultProps = {
  title: 'Welcome To musicZone',
  description: 'All your instruments from beginner to expert',
  keywords: 'music, instruments, drums, guitar, bass, keyboard, piano, violin',
}

export default Meta
