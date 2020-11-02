import React, { memo } from 'react'
import Layout from '../layout'

export default memo(function Info() {
  return (
    <Layout>
      <h3 className="info">个人信息: foo</h3>
    </Layout>
  )
})
