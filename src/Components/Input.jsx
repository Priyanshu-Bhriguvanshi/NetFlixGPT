import React, { useId } from 'react'


const Input = ({label, type="text", className="", placeholder="enter here", ...props},ref) => {
    const id =useId()
  return (
    <div className='flex flex-col gap-1'>
        {label && <label htmlFor={id}>{label}</label>}
        <input
        id={id}
        type={type}
        placeholder={placeholder}
        ref={ref}
        {...props}
        className={`px-4 py-4 ${className}`}
        />
    </div>
  )
}

export default React.forwardRef(Input);