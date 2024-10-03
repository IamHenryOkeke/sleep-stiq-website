import { useState } from 'react'
import { faq } from './faq'
import Accordion from './accordion'

export default function SleepStipFAQ() {
  const [selectedItem, setSelectedItem] = useState<number | null>(null)

  const handleClick = (id: number | null) => {
    if (selectedItem === id) {
      setSelectedItem(null)
    } else {
      setSelectedItem(id)
    }
  }
  return (
    <div className='py-4 lg:py-5 border-y border-[#BDBDBD] divide-y divide-[#BDBDBD] flex flex-col lg:w-full'>
      {
        faq.map((item, id) => (
          <Accordion key={id} question={item.question} answer={item.answer} handleOnClick={() => handleClick(id)} open={id === selectedItem} />
        ))
      }
    </div>
  )
}
