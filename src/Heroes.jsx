import React, { useState } from 'react'


export default function Heroes() {

    const [names, setNames] = useState(
        [
            "Шерлок Холмс", 
            "Доктор Ватсон", 
            "Профессор Мориарти",
            "Миссис Хадсон",
            "Ирен Адлер"
          ]
    )
    
    const handleDelete = (item) => {
    let copy = [...names]
    copy = copy.filter(name => name !== item  )
    setNames(copy)

  }

  return (
    <div>
            <ul>
            {
              names.map((item, index) => {
                return(
                    <li key={item}   onClick={() => handleDelete(item)} >
                        {item}
                    </li>
                )
              })
            }
            </ul>
    </div>
  )
}
