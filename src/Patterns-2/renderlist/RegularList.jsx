import React from 'react'
import { SmallPersonListItem } from './people/SmallPersonListItem'

export const RegularList = ({ 
    items, 
    resourceName,
    itemComponent: ItemComponent,

 }) => {
  return (
        <>
        {items.map((item,index) => {
            console.log( {...{ [resourceName]: item } })
    return (   <ItemComponent 
            key={index} 
            // person={item}
            // person={item}
            {...{ [resourceName]: item } }
            />)

 })}
        </>
  )
}
