import React from 'react'
import { Modal } from './Patterns-2/modal/Modal'
import { Landing } from './Patterns-2/renderlist/Landing'
import { Splitscreen } from './Patterns-2/splitscreen/Splitscreen'
// import { PersonItem } from './Patterns-2/try/PersonItem'
// import { RegList } from './Patterns-2/try/RegList'
// import { Display } from './test/Display'
// import { Person } from './test/Person'

const Left = () =>{ 
  return ( 
    <div>Left</div>
  )
}
const Right = () =>{ 
  return ( 
    <div>Right</div>
  )
}

const person = [{
  name: 'John',
  age: 21,
  favoriteColor: 'red'
}]


 function App(){
  return (
    <>
    {/* render */}
    {/* <Splitscreen>
      <Left />
      <Right />
    </Splitscreen>
    <Landing /> */}
    <Modal>
      This is the Modal
    </Modal>
    </>
  )
}

export default App