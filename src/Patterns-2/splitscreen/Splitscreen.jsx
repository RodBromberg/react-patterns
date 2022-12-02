import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex
`

const Panel = styled.div`
    flex: ${({weight}) => weight};
`

export const Splitscreen = ({ 
  children,
  leftWeight = 1,
  rightWeight = 1
}) => {
  const [left, right] = children
  return (
    <Container flex={'flex'}>
        <Panel weight={leftWeight}>
          {left}
        </Panel>
        <Panel weight={rightWeight}>
          {right}
        </Panel>
    </Container>
  )
}
