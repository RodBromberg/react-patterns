import React, { useState } from 'react'
import styled from 'styled-components'

const ModalBackground = styled.div`
    position: fiex;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background: rgba(0,0,0,5)
`
const ModalBody = styled.div`
    background-color: white;
    margin: 10% auto;
    padding: 20px;
    width: 50%;
`

export const Modal = ({ children }) => {
    const [toggle,setToggle] = useState(false)

    const Display = ()=> {
        return (
        <div style={{ width: '100%', height: 500, backgroundColor: 'red'}}>
            modal
        </div>
        )
    }

  return (
    <>
        <button onClick={()=>setToggle(!toggle)}>{toggle ? 'Close' : 'Open'}</button>
        {toggle ? (
            <ModalBackground onClick={()=>setToggle(false)}>
                <ModalBody onClick={e=>e.stopPropagation()}>
                    <p style={{ cursor: 'pointer'}} onClick={()=>setToggle(false)}>X</p>
                    {children}
                </ModalBody>
            </ModalBackground>
        ):null}
    </>
  )
}
