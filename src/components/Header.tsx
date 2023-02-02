import React, { FC } from 'react'

interface Props {
    setIsPaneOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const Header:FC<Props> = ({setIsPaneOpen}) => {
  return (
    <div onClick={() => setIsPaneOpen(true)} className='py-[10px] text-white flex justify-end px-[24px] font-[700] text-[24px] bg-blue'>
        Cart
    </div>
  )
}

export default Header