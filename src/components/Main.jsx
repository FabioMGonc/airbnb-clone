import React from 'react';
import Item from './Item';

const Main = () => {
  return (
    <main className='gap-3 mx-auto grid grid-cols-[repeat(auto-fit,minmax(225px,1fr))] max-w-7xl px-8'>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
    </main>
  )
}

export default Main;