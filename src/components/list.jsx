import React from 'react'
import Item from './item'

const List = ({ items }) => {
  return (
    <>
      {items.map((i) => (<Item item={i} key={i.id}/>))}
    </>
  )
}

export default List
