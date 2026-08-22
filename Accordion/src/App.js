import React, { useState } from 'react'
import { items } from './duumyData'
import './index.css'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'

function App() {
  // npm install react-icons
  // console.log('ítems:: ', items);
  const [openIndex, setOpenindex] = useState(null)

  const handleToggle = (index) => {
    setOpenindex(openIndex === index ? null : index)
  }


  return (
    !items || (items.length === 0) ? 'No items available' :
      <div className='accrodian'>
        {
          items.map((item, index) => {
            return (
              <div key={index}>
                <h1 className='accrodian-title' onClick={() => handleToggle(index)}>
                  {item.title}
                  {openIndex === index ? <FaChevronUp className='right' /> : <FaChevronDown className='right' />}
                </h1>
                {
                  openIndex === index &&
                  <p className='accrodian-content'>{item.content}</p>
                }
              </div>
            )
          })
        }
      </div>
  )
}

export default App