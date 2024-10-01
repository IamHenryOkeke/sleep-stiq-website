import React from 'react'

export default function Button({ text }: { text: string }) {
  return (
    <button className='bg-primaryRed rounded-md py-3 px-20 text-white'>
      {text}
    </button>
  )
}
