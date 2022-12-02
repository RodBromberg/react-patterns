import React from 'react'
import { LargePersonListItem } from './people/LargePersonListItem'
import { SmallPersonListItem } from './people/SmallPersonListItem'
import { LargeProductListItem } from './products/LargeProductListItem'
import { RegularList } from './RegularList'

const people = [{
    name: 'John',
    age: 34,
    hairColor: 'brown',
    hobbies: ['study', 'coding', 'reading']
},
{
    name: 'Mike',
    age: 64,
    hairColor: 'blonde',
    hobbies: ['basketball', 'baseball', 'swimming']
},
{
    name: 'Jane',
    age: 24,
    hairColor: 'black',
    hobbies: ['hiking', 'shopping', 'bird watching']
}
]

const products = [{
    name: 'flat-screen tv',
    price: '$500',
    description: '64in flat screen hd 4k',
    rating: 4.4,
},
{
    name: 'shirt',
    price: '$50',
    description: 'Blue striped shirt',
    rating: 3.9,
},
{
    name: 'Ipad',
    price: '$300',
    description: '128gb ipad 8th generation',
    rating: 4.1,
}
]

export const Landing = () => {
  return (
    <>
    <RegularList 
    items={people} 
    resourceName='person' 
    itemComponent={SmallPersonListItem}
    />
    <RegularList 
    items={people} 
    resourceName='person' 
    itemComponent={LargePersonListItem}
    />
    <RegularList 
    items={products} 
    resourceName='product' 
    itemComponent={LargeProductListItem}
    />
    </>
  )
}
