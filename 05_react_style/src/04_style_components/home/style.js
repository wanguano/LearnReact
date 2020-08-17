import styled from 'styled-components'
export const HomeWrapper = styled.div`
  font-size: 50px;
  color: red;
  font-size: 12px;
  .banner {
    background-color: skyblue;
    span {
      color: #fff;

      &:hover {
        background-color: orange;
      }

      &::after {
        content: 'aaa';
      }

      &.active {
        background-color: purple;
      }
    }
  }
`

export const HomeH2 = styled.h2`
  background-color: blue;
`
