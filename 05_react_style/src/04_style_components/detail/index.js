import React from 'react'
import styled from 'styled-components'
import './style.css'

const DetailWrapper = styled.div`
  background-color: red;
  width: 200px;
  .title {
    color: #fff;
  }
`

export default function Detail() {
  return (
    <DetailWrapper>
      {/* css 全局引入  */}
      <h3 className="title">Detail</h3>
      {/* 当前组件引用 */}
      <div className="title">Detail info</div>
    </DetailWrapper>
  )
}
