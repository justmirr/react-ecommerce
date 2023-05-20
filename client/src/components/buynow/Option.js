import React from 'react'


const Option = () => {
  return (
    <div className='add_remove_select'>
        <select name="" id="">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
        </select>
        <p style={{cursor:"pointer"}}>delete</p><span>|</span>
        <p className='forremovmedia'>save for later</p><span>|</span>
        <p className='forremovemedia'>see similar</p>
    </div>
  )
}

export default Option